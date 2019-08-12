var nameHandler = document.getElementById('name');
var mobileHandler = document.getElementById('mobile');
var emailHandler = document.getElementById('email');
var expHanadler = document.getElementById('exp');
var aboutHandler = document.getElementById('about');
// var courses = [
  //             {lang:'js',course:'MERN'},
  //             {lang:'js',course:'REACT'},
  //             {lang:'js',course:'NODE'},
  //             {lang:'py',course:'DJANGO'},
  //             {lang:'rb',course:'RAILS'}
  //         ];

  var course = {
      js: ['MERN', 'NodeJS', 'React'],
      py: ['Django'],
      rb: ['Rails']
  };

  var langHandler = document.getElementById('lang');
  var crsHandler = document.getElementById('crs');

  langHandler.addEventListener('change', function() {
      // console.log(langHandler.value);
      var courseSelected = langHandler.value;
      crsHandler.innerHTML = "";
      course[courseSelected].forEach(c => {
        var option = document.createElement('option');
        var optionText = document.createTextNode(c);
        option.setAttribute('value', c);
        option.appendChild(optionText);
        crsHandler.appendChild(option);
      });
  });

  nameHandler.addEventListener('blur', function() {
    var url = `https://gender-api.com/get?name=${nameHandler.value}&key=SBrwJgoFzvJcoBbmMr`;
    axios.get(url).then(function(response) {
        // console.log(response.data.gender)
        document.getElementById(response.data.gender).setAttribute('checked', true);
    });
  });
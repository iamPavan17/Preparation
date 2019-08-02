// Write a function that accepts a nested array and returns a well-structured object. The array passed into the function will look like the one below and have only four levels of nested-ness.

// As you can see in the examples below, the structure of the input is an array. Each element of that array is an array. The first element of the nested array (eg. animals) should become a property key on the return object. The second element of the nested array is also an array, where the elements alternate between property names (eg. dogs) and corresponding property values (eg. ['Corgi, 'Sheltie']).

// Example

// var data = [
//   [ 'animals',
//     [
//       'dogs', ['Corgi', 'Sheltie'],
//       'cats', ['Tabby','Black'],
//       'pigs', ['Teacup']
//     ]
//   ],
//   [ 'guitars',
//     [
//       'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
//       'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
//     ]
//   ]
// ];
// INPUT: objectifier(data);
// OUTPUT:
// {
//   animals : {
//     dogs : ['Corgi', 'Sheltie'],
//     cats : ['Tabby','Black'],
//     pigs : ['Teacup']
// },
//   guitars : {
//     Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
//     Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
//   }
// }

function objectifier(arr) {
    var obj = {};
    var innerArr = [];
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i][0])
        obj[arr[i][0]] = {};
        // console.log(arr[i][1])
        innerArr.push(arr[i][1]);
    }

    var firstArr = innerArr[0];
    var secondArr = innerArr[1];
   
    var animalObj = {};
    for(let i = 0; i < firstArr.length; i = i + 2) {
        animalObj[firstArr[i]] = firstArr[i + 1];
    }

    var guitarsObj = {};
    for(let i = 0; i < secondArr.length; i = i + 2) {
        guitarsObj[secondArr[i]] = secondArr[i + 1];
    }
    var arr = [];
    arr.push(animalObj, guitarsObj);
    var objArr = Object.keys(obj);
    for(let i = 0; i < objArr.length; i++) {
        obj[objArr[i]] = arr[i]
    }

    return obj;
}

var data = [
    [ 'animals',
      [
        'dogs', ['Corgi', 'Sheltie'],
        'cats', ['Tabby','Black'],
        'pigs', ['Teacup']
      ]
    ],
    [ 'guitars',
      [
        'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
        'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
      ]
    ]
  ];

console.log(objectifier(data));

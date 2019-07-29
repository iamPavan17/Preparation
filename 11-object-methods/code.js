var coder = {
    name:'Ani',
    skills:['JS','RB','PY'],
    getSkills: function() {
        var that = this;
        this.skills.forEach(function(skill) {
            console.log(`${that.name} knows ${skill}.`)
        });
    },
    // name2: name
};

coder.getSkills();
// console.log(coder.name2)
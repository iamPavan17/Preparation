// function name be Pascal Case
// creating object prototypes or object constructor without using arguments
function Song() {
    this.name ;
    this.artist ;
    this.duration ;
    this.description = function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}.`
    }
}

var arr = new Array();  // will create arrays using an object
var obj = new Object(); //will create object using an object

var song = new Song();
song.name = 'love controller';
// song.artist = 'ZK';
// song.duration = '3 minutes 15 seconds'
// console.log(song)
// console.log(song.description());

console.log(song);
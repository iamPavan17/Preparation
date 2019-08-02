// object constructor function with using arguments
function Song(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
    this.description = function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}.`
    }
}

var song = new Song('Love controller', 'ZK', '3 minutes 13 seconds');
console.log(song);
console.log(song.description())

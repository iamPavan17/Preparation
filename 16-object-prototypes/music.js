var song = {
    name: 'love controller',
    artist: 'ZK',
    duration: '3mins 15sec',
    play: function() {
        console.log(`${this.name} by ${this.artist} duration is ${this.duration}.`)
    },
    stop: function() {
        console.log(`${this.name} by ${this.artist} STOPPED.`)
    }
};

var song1 = {
    name: 'Bollywood Medley 1',
    artist: 'ZK',
    duration: '3mins 11sec',
    play: function() {
        console.log(`${this.name} by ${this.artist} duration is ${this.duration}.`)
    },
    stop: function() {
        console.log(`${this.name} by ${this.artist} STOPPED.`)
    }
};

var song2 = {
    name: 'Bollywood Medley 2',
    artist: 'ZK',
    duration: '3mins 1sec',
    play: function() {
        console.log(`${this.name} by ${this.artist} duration is ${this.duration}.`)
    },
    stop: function() {
        console.log(`${this.name} by ${this.artist} STOPPED.`)
    }
}


song.play();
song.stop();

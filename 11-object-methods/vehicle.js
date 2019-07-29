var car = {
    model: 'A Series',
    make: 'Benz',
    carState: false,
    start: function() {
        this.carState = true;
        console.log(`The engine started!!`);
    },
    stop: function() {
        this.carState = false;
        console.log(`The engine stopped!!`);
    },
    drive: function() {
        if(this.carState){
            console.log(`The car is moving!!`)
        } else {
            console.log(`Start the car first!!`);
        }
            
    
    }
}

car.drive();

car.start();
car.stop();

car.drive();
car.start();
car.drive();
car.stop();
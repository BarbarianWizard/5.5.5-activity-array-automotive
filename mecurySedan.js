//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        maximumSpeed = 160;
        fuel = 10;
        scheduleService = false;
    }

    serviceLight(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
this.passenger = num;
return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        }
else {
    console.log(this.model + " " + this.make + " is full")
}
    }

    start() {
        if (this.fuel > 0) {
            console.log("VROOM!!!");
            return this.start = true;
                    } else {
            console.log("need fuel");
            return this.start = false;
                    }
    }
}
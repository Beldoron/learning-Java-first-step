
// 1) Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// 5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.



class Tv {

	constructor(brand) {
		this.brand = brand;
		this.channel = 1;
		this.volume = 50;
	}

	increasevol(amount) {
		if((this.volume + amount) >= 100) 
		this.volume = 100;
		else this.volume += amount;

	}

	decreasevol(amount) {
		if((this.volume - amount) <= 100) 
		this.volume = 0;
		else this.volume -= amount;

	}

	reset(){
		tv = new Tv("Samsung")
	}

	setchannel(amount){
		if(amount <= 60 && amount >= 0)
		this.channel = amount
		else
		this.channel = this.channel;
	}

	status() {
		return this.brand + " with a volume of "+ this.volume + " and the channel " + this.channel;
	}

}

class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand, model) {
		this.brand = brand;
		this.speed = 0;
		this.model = model;
	}

	// methods:



	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
		if (this.speed >= amount) 
			this.speed -= amount;
		else this.speed = 0;
		
	}

	status() {
		return this.brand + " a " + this.model + " running at " + this.speed + " km/h";
	}

	stop() {
		this.speed -= this.speed;
	}
	testing() {
		if (this.speed > 0) return true;
		else return false;
	}
}


// Now we use create a Car object using the class

var car = new Car("Ford", "Mondeo");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());


// We may create other cars easily

var car2 = new Car("Ferrari");
car2.accelerate(200);
console.log(car2.status());


var tv = new Tv("Samsung")
console.log(tv.status());
tv.increasevol(51);
console.log(tv.status());
tv.decreasevol(105);
console.log(tv.status());
tv.setchannel(59);
console.log(tv.status());
tv.setchannel(61);
console.log(tv.status());
tv.setchannel(-1);
console.log(tv.status());
tv.setchannel(3);
console.log(tv.status());
tv.reset();
console.log(tv.status());

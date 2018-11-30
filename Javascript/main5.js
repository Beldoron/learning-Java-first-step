
// console.log("Objects containing other objects");

// // Let's remember our Product class

// class Product {

// 	constructor(name, price) {
// 		this.name = name;
// 		this.price = price;
// 	}

// 	toString() {
// 		return this.name + " " + this.price + "€";
// 	}
// }




// // And create a couple of products
// let p1 = new Product("vacuum cleaner", 100);
// let p2 = new Product("pencil", 3);
// let p3 = new Product("bike", 300);

// // 1) In ShoppingCart, define a method totalPrice() that returns the total amount of the products it contains.

// // Now, let's create a ShoppingCart class, that will contain products

// class ShoppingCart {

// 	constructor() {
// 		this.products = []; // empty at first
// 	}

// 	totalPrice() {
// 		let arr = this.products
// 		const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 		let totalprice = [];
// 		totalprice = arr.map(function (products, index, array) {
// 			return products.price
// 		});
// 		console.log(totalprice.reduce(reducer));
	
// 	}
	

// 	addProduct(product) {
// 		this.products.push(product);
// 	}

// 	toString() {
// 		return "cart with: " + this.products;
// 	}
// }


// function count() {
//     array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

//     array_elements.sort();

//     var current = null;
//     var cnt = 0;
//     for (var i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] != current) {
//             if (cnt > 0) {
//                 document.write(current + ' comes --> ' + cnt + ' times<br>');
//             } 
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
// 	}
// }


// // We can create a cart and add the products we created before

// let cart = new ShoppingCart();
// cart.addProduct(p1);
// cart.addProduct(p1);
// cart.addProduct(p1);
// cart.addProduct(p1);
// cart.addProduct(p1);
// cart.addProduct(p2);
// cart.addProduct(p2);
// cart.addProduct(p3);

// cart.totalPrice();



// console.log(cart.products);

// console.log(cart);


// console.log("We have a " + cart);




console.log("Objects containing other objects");

// Let's remember our Product class

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + this.price + " EURO";
	}
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);


// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at first
		this.price = [];
		this.total = [];
		this.priceDiscount = [];
		this.numberOfItems = [];
		this.finalResult = [];
		
	}

	addProduct(product) {
		this.products.push(product);
		this.price.push(product.price);
	}
	

	
	totalPrice() {
	 //generating new arraw to count products
		let result = 0;
		var numberSameProducts = [];
		var copy = this.products.slice(0);
		for (var i = 0; i < this.products.length; i++) {
			var myCount = 0;	
			for (var w = 0; w < copy.length; w++) {
				if (this.products[i] == copy[w]) {
					myCount++;
					delete copy[w];
				}
			}
	 
			if (myCount > 0) {
				var a = new Object();
				a.value = this.products[i];
				a.count = myCount;
				numberSameProducts.push(a);
			}
			console.log(numberSameProducts);
			
		}
		
		//Calculation free item
		for (var i = 0; i < numberSameProducts.length; i ++) {
			const test = (numberSameProducts[i].count  * numberSameProducts[i].value.price) - (Math.floor(numberSameProducts[i].count/4) * numberSameProducts[i].value.price)
			this.priceDiscount.push(test)
			// this.numberOfItems.push(numberSameProducts.count.length)
		}

		//Multiplying all numbers
		for(var i = 0; i < 10000; i++) result = this.priceDiscount.reduce(function(pv, cv) { return pv + parseInt(cv); }, 0);
		this.total.push(result);

		//Calculation Discount
		if (this.price.length >= 5) {
			let finalResult =  this.total - (10.0 / 100) * this.total;
			this.finalResult.push(finalResult);
		} else 
		this.finalResult.push(result);



	};

		
		toString() {
			return "cart with: " + this.products + 'with a total sum off: ' + this.finalResult + 'EURO';
		}
	
}







// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);

cart.totalPrice();

// console.log(cart.totalPrice());

console.log(cart.finalResult);
// var newArray = compressArray(cart.products);
console.log(cart.total);
// console.log(newArray[0].count);
// console.log(newArray[0].value.price);
 

console.log(cart);

console.log(cart.products);

console.log("We have a " + cart);

console.log(Math.floor(7/4))

// 3) Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils) 
// you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8 pencils 
// you only pay 6, etc. Change totalPrice so it considers the free items you get. Notice that if 
// you buy 3 pencils you just pay the 3 of them.



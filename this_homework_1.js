// Task #1 

const rectangle = { 
	width: 300, 
	height: 5, 
	getSquare: function () {
    return this.width * this.height
  }
};

console.log(rectangle.getSquare());

// Task #2

const item = {
    price: 10,
    discount: '15%',
    getPrice() {return this.price},
    getPriceWithDiscount,
};

function getPriceWithDiscount() {
  let discount = this.price * parseFloat(this.discount) / 100;
  return this.price - discount
}

console.log(item.getPrice()); // 10
console.log(item.getPriceWithDiscount()); // 8.5


// Task #3

const object = {
  height: 10,
  increaseHeight: function () {
    return this.height += 1
  }
}

console.log(object.height);
object.increaseHeight();
console.log(object.height);


// Task #4

const numerator = {
  value: 1,
  double: function () {
    this.value *=2;
    return this;
  },
  plusOne: function () {
    this.value +=1;
    return this;
  },
  minusOne: function () {
    this.value -=1;
    return this;
  }
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value)
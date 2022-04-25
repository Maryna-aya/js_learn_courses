// Task #1

const food = {
  price: 50,
  quantity: 2,
  getTotalCost: function() {
    return this.price * this.quantity;
  }
}

console.log(food.getTotalCost());

// Task #2

const details = {
  price: 3,
  quantity: 1000
}

console.log(food.getTotalCost.call(details));

// Task #3

let sizes = {
  width: 5,
  height: 10
},

getSquare = function () {
  return this.width * this.height
};

console.log(getSquare.call(sizes));

// Task #4

let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();
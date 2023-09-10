// console.log(`Events allows to write code in a non-blocking manner`);
// const eventEmitter = require("events");
// const emitter = new eventEmitter();
const ORDER_PIZZA_EVENT = "order-pizza";
// emitter.on(ORDER_PIZZA_EVENT, (size, toppings) => {
//   console.log(`${size} Pizza order recieved with toppings of ${toppings}`);
// });
// emitter.on(ORDER_PIZZA_EVENT, (size) => {
//   if (size === "large") {
//     console.log("Enjoy a compliment drink with ${size} pizza");
//   }
// });
// emitter.emit(ORDER_PIZZA_EVENT, "large", ["mushrooms", "pineapple"]);

//Event emitter example.
const EventEmitter = require("events");
class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNum = 0;
  }
  complementaryDrinks(size) {
    if (size === "xl") {
      console.log(`Complementary drink from ma side`);
    }
  }
  order(size, toppings) {
    this.emit(ORDER_PIZZA_EVENT, size, toppings);
    this.complementaryDrinks(size);
  }
  displayNumberOfOrders() {
    console.log(`Number of pizza served are ${this.orderNum}`);
  }
}

const pizzaShop = new PizzaShop();
pizzaShop.on(ORDER_PIZZA_EVENT, (size, toppings) => {
  console.log(`Order recieved for ${size} and ${toppings}`);
});
pizzaShop.order("large", ["Mushrooms", "Beef Sausages"]);

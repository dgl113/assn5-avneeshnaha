class OrderItem {
  #quantity;
  #size;
  #description;

  constructor(quantity, size, description) {
    this.#quantity = quantity;
    this.#size = size;
    this.#description = description;
  }

  get quantity() {
    return this.#quantity;
  }

  set quantity(value) {
    this.#quantity = value;
  }

  get size() {
    return this.#size;
  }

  set size(value) {
    this.#size = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  cost() {
    let drinkCosts = {
      "Short": 2.99,
      "Tall": 3.19,
      "Grande": 3.49,
      "Venti": 3.99
    };
    let teaCosts = {
      "Short": 2.85,
      "Tall": 3.05,
      "Grande": 3.25,
      "Venti": 3.50
    };

    let cost = 0;

    if (this.#description.toLowerCase().includes('coffee')) {
      cost = drinkCosts[this.#size];
    } else if (this.#description.toLowerCase().includes('tea')) {
      cost = teaCosts[this.#size];
    }

    return cost * this.#quantity;
  }
}

// Example usage:
let item1 = new OrderItem(2, "Grande", "Coffee");
console.log(item1.cost()); // Output: 6.98

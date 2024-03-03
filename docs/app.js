'use strict';

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
    let baseCost = 0;
    switch (this.#description.toLowerCase()) {
      case 'coffee':
        switch (this.#size.toLowerCase()) {
          case 'short':
            baseCost = 2.99;
            break;
          case 'tall':
            baseCost = 3.19;
            break;
          case 'grande':
            baseCost = 3.49;
            break;
          case 'venti':
            baseCost = 3.99;
            break;
          default:
            throw new Error('Invalid size');
        }
        break;
      case 'tea':
        switch (this.#size.toLowerCase()) {
          case 'short':
            baseCost = 2.85;
            break;
          case 'tall':
            baseCost = 3.05;
            break;
          case 'grande':
            baseCost = 3.25;
            break;
          case 'venti':
            baseCost = 3.50;
            break;
          default:
            throw new Error('Invalid size');
        }
        break;
      default:
        throw new Error('Invalid description');
    }
    return this.#quantity * baseCost;
  }
}

// Example usage
const orderItem = new OrderItem(2, 'Tall', 'Coffee');
console.log(orderItem.cost()); // Output: 6.38

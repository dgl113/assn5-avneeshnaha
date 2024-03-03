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

  get size() {
    return this.#size;
  }

  get description() {
    return this.#description;
  }

  
  set quantity(value) {
    this.#quantity = value;
  }

 set size(value) {
    this.#size = value;
  }

  set description(value) {
    this.#description;
  }


  cost() {
    const baseCosts = {
      'Short (236ml)': {
        coffee: 2.99,
        tea: 2.85,
      },
      'Tall (354ml)': {
        coffee: 3.19,
        tea: 3.05,
      },
      'Grande (473ml)': {
        coffee: 3.49,
        tea: 3.25,
      },
      'Venti (591ml)': {
        coffee: 3.99,
        tea: 3.5,
      },
    };


    const type = this.#description.includes('Tea') ? 'tea' : 'coffee';
    const costPerItem = baseCosts[this.#size][type];
    return this.#quantity * costPerItem;
  }
}
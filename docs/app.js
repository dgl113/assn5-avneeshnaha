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
        let unitPrice;

        if (this.#description.toLowerCase().includes('coffee')) {
            switch (this.#size.toLowerCase()) {
                case 'short':
                    unitPrice = 2.99;
                    break;
                case 'tall':
                    unitPrice = 3.19;
                    break;
                case 'grande':
                    unitPrice = 3.49;
                    break;
                case 'venti':
                    unitPrice = 3.99;
                    break;
                default:
                    throw new Error('Invalid size');
            }
        } else if (this.#description.toLowerCase().includes('tea')) {
            switch (this.#size.toLowerCase()) {
                case 'short':
                    unitPrice = 2.85;
                    break;
                case 'tall':
                    unitPrice = 3.05;
                    break;
                case 'grande':
                    unitPrice = 3.25;
                    break;
                case 'venti':
                    unitPrice = 3.50;
                    break;
                default:
                    throw new Error('Invalid size');
            }
        } else {
            throw new Error('Invalid description');
        }

        if (typeof unitPrice === 'undefined') {
            throw new Error('Invalid size');
        }

        return this.#quantity * unitPrice;
    }
}

cost() {
  let unitPrice;

  if (this._description.toLowerCase().includes('coffee')) {
      switch (this._size.toLowerCase()) {
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
  } else if (this._description.toLowerCase().includes('tea')) {
      switch (this._size.toLowerCase()) {
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

  return this._quantity * unitPrice;
}

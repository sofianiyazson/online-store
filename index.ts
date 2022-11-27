import products from './products';

const productName: string = 'tote bag';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = '121 Stockholm, Strandvagen 12';

const product = products.filter((product) => {
  return product.name === productName;
})[0];

if (product.preOrder) {
  console.log('We will send you a message when the item is on the way');
}

if (product.price > 25) {
  console.log('We will provide free shipping for this product');
  shipping = 0;
} else {
  shipping = 5;
}

if (shippingAddress.match('Stockholm')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:  $${product.price}
Tax:  $${taxTotal.toFixed(2)}
Shipping:  $${shipping.toFixed(2)}
Total:  $${total.toFixed(2)}
`);

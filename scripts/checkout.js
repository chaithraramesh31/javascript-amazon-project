import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/backend-practice.js';
import { fetchProducts } from '../data/products.js';
import { fetchCart } from '../data/cart.js';

Promise.all([
  new Promise((resolve) => {
    fetchProducts(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) => {
    fetchCart(() => {
      resolve('value2');
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary(); 
});

// new Promise((resolve) => {
//   fetchProducts(() => {
//     resolve('value1');
//   });
// }).then((value) => {
//   console.log(value);
//   return new Promise((resolve) => {
//     fetchCart(() => {
//       resolve();
//     });
//   });
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();  
// });


// fetchProducts(() => {
//   fetchCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });

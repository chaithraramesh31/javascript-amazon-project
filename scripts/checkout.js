import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/backend-practice.js';
import { fetchProducts, loadProductsFetch } from '../data/products.js';
import { fetchCart } from '../data/cart.js';

async function loadPage() {
  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    fetchCart(() => {
      resolve('value2');
    });
  });

  renderOrderSummary();
  renderPaymentSummary();

  return value;
}

loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     fetchCart(() => {
//       resolve('value2');
//     });
//   })
// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary(); 
// });

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

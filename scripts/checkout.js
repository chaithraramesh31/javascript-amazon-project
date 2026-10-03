import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/backend-practice.js';
import { fetchProducts } from '../data/products.js';

fetchProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

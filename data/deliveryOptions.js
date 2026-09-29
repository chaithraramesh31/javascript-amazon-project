import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption) {
  let today = dayjs();
  let todayday = today.format('dddd');
  let deliveryDays = deliveryOption.deliveryDays;
  let i = 0;
  while (i !== deliveryDays) {
    if(todayday !== 'Saturday' && todayday !== 'Sunday') {
      i++;
    }
    today = today.add(1, 'days');
    todayday = today.format('dddd');
  }

  const dateString = today.format('dddd, MMMM D');

  return dateString;
}

export const deliveryOptions = [
  {
    id: '1',
    deliveryDays: 7,
    priceCents: 0
  },
  {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
  },
  {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
  }
];
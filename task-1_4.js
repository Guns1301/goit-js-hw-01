const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; 
let balanceCredit;
let message;

if (orderPieces === null) {
  message = CANCELED_BY_USER;
  console.log(message);
} else if (orderPieces * pricePerDroid > credits) {
  message = ACCESS_DENIED;
  console.log(message);
// } else if (orderPieces === 0 && orderPieces * pricePerDroid <= credits) {
//   totalPrice = orderPieces * pricePerDroid;
//   balanceCredit = credits - totalPrice;
//   message = `Вы купили ${orderPieces} дроидов, цена покупки составила ${totalPrice}, на счету осталось ${balanceCredit} кредитов`;
//   console.log(message);
} else if (orderPieces >= 0) {
  totalPrice = orderPieces * pricePerDroid;
  balanceCredit = credits - totalPrice;
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(message);
}

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

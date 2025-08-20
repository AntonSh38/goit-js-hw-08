// 1. Створи змінну name і присвой їй твоє ім’я. Виведи її в консоль.

// const name = 'anton';
// console.log(name);

// 2.	Створи змінну age і присвой їй число. Виведи рядок: "Мені [age] років".

// const age = 41;
// console.log(`Мені ${age} років`);

// 3.	Створи змінну isStudent з булевим значенням. Виведи її тип.

// const isStudent = true;

// console.log(typeof isStudent);

// 4.	Створи три змінні: a = 5, b = 10, sum = a + b. Виведи sum.

// const a = 5;
// const b = 10;
// const sum = a + b;
// console.log(sum);

// 5.	Створи змінну greeting = "Привіт" і додай до неї name. Виведи результат.

// const greeting = 'Привіт';
// console.log('name', greeting);
// console.log(`${name} ${greeting}`);
// console.log(name + ' ' + greeting);

// 6.	Створи змінну x = 7, y = 3. Виведи результат x - y.

// const x = 7;
// const y = 3;
// const res = x / y;
// console.log(x / y);
// console.log(typeof res);

// console.log(Math.round(res * 100) / 100);

// 7.	Створи змінну z = x * y. Виведи z.

// const z = x * y;
// console.log(z);

// 8.	Створи змінну isEqual = x === y. Виведи isEqual.

// const isEqual = x === y;
// console.log(isEqual);

//9.	Створи змінну isGreater = x > y. Виведи isGreater.

// const isGreater = x > y;
// console.log(isGreater);

// 10.	Створи змінну result = (x + y) * 2. Виведи result.

// const result = (x + y) * 2;
// console.log(result);

// 11.	Створи змінну temp = 25. Якщо temp > 20, виведи "Тепло".

// const temp = 25;
// const checkTemp = temp > 20 ? 'Тепло' : 'false';
// console.log(checkTemp);

// if (temp > 20) {
//   console.log('Тепло');
// } else {
//   console.log('false');
// }

// 12.	Якщо temp < 10, виведи "Холодно", інакше "Нормально".

// if (temp < 10) {
//   console.log('Холодно');
// } else {
//   console.log('Нормально');
// }

// 13.	Створи змінну isSunny = true. Якщо isSunny, виведи "Сонячно".

// const isSunny = true;
// const checkisSunny = isSunny === true ? 'Сонячно' : 'false';
// console.log(checkisSunny);

// 14.	Створи змінну hour = 14. Якщо hour < 12, виведи "Ранок", інакше "День".

// const hour = 14;

// if (hour < 12) {
//   console.log('Ранок');
// } else {
//   console.log('День');
// }

// 15.	Створи змінну score = 85. Якщо score >= 90, "Відмінно", >=75 — "Добре", інакше "Старайся більше".

// const score = 85;
// if (score >= 90) {
//   console.log('Відмінно');
// } else if (score >= 75) {
//   console.log('Добре');
// } else {
//   console.log('Старайся більше');
// }

// 16.	Створи змінну age = 18. Виведи "Дорослий" або "Дитина" через тернарний оператор.

// const age = 18;
// const resultAge = age >= 18 ? 'Дорослий' : 'Дитина';
// console.log(resultAge);

// 17.	Створи змінну isOnline = false. Виведи "В мережі" або "Офлайн".

// const isOnline = false;
// const resultOnline = isOnline === true ? 'В мережі' : 'Офлайн';
// console.log(resultOnline);

// 18.	Створи змінну speed = 60. Виведи "Швидко" якщо speed > 50, інакше "Повільно".

// const speed = 60;
// const maxSpeed = speed > 50 ? 'Швидко' : 'Повільно';
// console.log(maxSpeed);

// 19.	Створи змінну isWeekend = true. Виведи "Відпочинок" або "Робота".

// const isWeekend = true;
// const workWeekend = isWeekend === true ? 'Відпочинок' : 'Робота';
// console.log(workWeekend);

// 20.	Створи змінну grade = 70.Якщо grade > 60 Виведи "Здав" інакше "Не здав".

// const grade = 70;
// const resGrade = grade > 60 ? 'Здав' : 'Не здав';
// console.log(resGrade);

// 21.	Виведи числа від 1 до 5.

// const min = 1;
// const max = 5;
// for (let i = min; i <= max; i++) {
//   console.log(i);
// }

// 22.	Виведи парні числа від 2 до 10.

// const min = 1;
// const max = 10;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 23.	Виведи числа від 10 до 1 у зворотному порядку.

// const min = 1;
// const max = 10;

// for (let i = max; i >= min; i--) {
//   console.log(i);
// }

//24.	Виведи квадрат кожного числа від 1 до 5.

// const min = 1;
// const max = 5;
// const resSqrt = 2;

// for (let i = min; i <= max; i++) {
// //   console.log(i ** resSqrt);
// }

// 25.	Виведи "Hello" 3 рази.

// const greeting = 'Hello';

// for (let i = 0; i < 3; i++) {
//   console.log(i + greeting);
// }

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// let hexColors = [];
// let rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let resPrice = null;

//   for (const product of products) {
//     if (product.name === productName) {
//       resPrice = product.price;
//     }
//   }
//   return resPrice;
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let value = [];

//   for (const product of products) {
//     if (propName in product) {
//       value.push(product[propName]);
//     }
//   }
//   return value;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     } else {
//       return `Product ${productName} not found!`;
//     }
//   }
//     return totalPrice;

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

function add(...args) {
  return args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  //   let sum = 0;
  //   for (const arg of args) {
  //     sum += arg;
  //   }
  //   return sum;
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));

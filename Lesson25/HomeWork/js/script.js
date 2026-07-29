// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const showStudentInfo = {
//   showInfo: function () {
//     console.group(`${this.name} info`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Speciality: ${this.speciality}`);
//     console.log(`Avarage: ${this.avarage}`);
//     console.log(`Missed: ${this.missed}`);
//     console.groupEnd();
//   },
// };

// const stud1 = {
//   name: "Kate",
//   speciality: "Tourism",
//   avarage: 4.5,
//   missed: 6,
// };

// const stud2 = {
//   name: "Sam",
//   speciality: "IT",
//   avarage: 4.3,
//   missed: 9,
// };

// const stud3 = {
//   name: "Peter",
//   speciality: "Law",
//   avarage: 4.2,
//   missed: 3,
// };

// showStudentInfo.showInfo.call(stud1);
// showStudentInfo.showInfo.call(stud2);
// showStudentInfo.showInfo.call(stud3);

// showStudentInfo.showInfo.apply(stud1);
// showStudentInfo.showInfo.apply(stud2);
// showStudentInfo.showInfo.apply(stud3);

// showStudentInfo.showInfo.bind(stud1)();
// showStudentInfo.showInfo.bind(stud2)();
// showStudentInfo.showInfo.bind(stud3)();

// --2--
// Написати дві кнопки і закріпити на них функції:
//  при натисканні на кнопку html - має видати коротке визначення що це таке
//  при натисканні на кнопку css - має видати коротке визначення що це таке

// const defineWord = {
//   showInfo() {
//     console.log(`${this.name} - це ${this.definition}`);
//   },
// };

// const htmlDefinition = {
//   name: "HTML",
//   definition: "мова розмітки гіпертексту.",
// };

// const cssDefinition = {
//   name: "CSS",
//   definition: "спеціальна мова стилю сторінок.",
// };

// document
//   .querySelector("#html-definition")
//   .addEventListener("click", defineWord.showInfo.bind(htmlDefinition));

// document
//   .querySelector("#css-definition")
//   .addEventListener("click", defineWord.showInfo.bind(cssDefinition));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//  функція має повертати назву товару і вартість
//  перевірити на варіантах:
//   1) banana 30, 4, 5
//   2) cherry  58, 1, 3
//   3) orange 89. 3, 4

// якщо по темі лекції через замикання і this:

// const infoItem = {
//   shop: function (name, pricePerKg, amount) {
//     const totalPrice = this.pricePerKg * this.amount;
//     return "The price for " + this.name + " is " + totalPrice;
//   },
// };

// const item1 = {
//   name: "banana",
//   pricePerKg: 30,
//   amount: 4,
// };

// const item2 = {
//   name: "cherry",
//   pricePerKg: 58,
//   amount: 1,
// };

// const item3 = {
//   name: "orange",
//   pricePerKg: 89,
//   amount: 3,
// };

// console.log(infoItem.shop.call(item1));
// console.log(infoItem.shop.call(item2));
// console.log(infoItem.shop.call(item3));

// -----
// якщо буквально як в завданні сказано - функція(назва, ціна за кг, кіл-ть); повертає назва + вартість. так теж можна було б зробити?

// function shop(name, pricePerKg, amount) {
//   const totalPrice = pricePerKg * amount;
//   return "The price for " + name + " is " + totalPrice;
// }

// console.log(shop("banana", 30, 4));
// console.log(shop("banana", 30, 5));

// console.log(shop("cherry", 58, 1));
// console.log(shop("cherry", 58, 3));

// console.log(shop("orange", 89, 3));
// console.log(shop("orange", 89, 4));

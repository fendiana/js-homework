// --------------------------//
// Функції
// --------------------------//
//- функції — це головні “будівельні блоки” програми; вони дозволяють робити однакові дії багато разів без повторення коду; Функції можна уявити як чорну скриньку, вони отримують щось на вході (дані), і віддають щось на виході (результат виконання коду всередині функції).

//- хороша назва функції відповідає на питання "а що вона робить?"

//- функції мають бути максимально короткими: одна функція - одна дія

// --------------------------//
// function declaration //
// --------------------------//

// function showMessage(name, city) {
//   console.log("Hello, my nase is " + name + ", I'm from " + city);
// } //- це оголошення функції

// showMessage("Nata", "Kyiv"); //- це виклик функції; щоб викликати функцію потрібно написати її назву і круглі дужки
// showMessage("Lesya", "Dnipro "); //- викликати можна безліч разів, скільки будемо викликати, стільки вона і відпрацює

//- аргументи це значння що відправляються при виклику
//- параметри це значенн при оголошенні функцій; те що ми матимемо в дужках ()

// --------------------------//
// function expression //- використовується частіше
// --------------------------//

// const sayHi = function () {
//   console.log("Hi!");
// };

// sayHi();

// --------------------------//
// Локальні і глобальні змінні //
// --------------------------//
//- локальні змінні - змінні, які оголошені всередині функції, і доступні тільки в середині цієї функції

// const userName = "Ann"; //- глобальна змінна

// const sayHi = function () {
//   let message = "Hello, my name is ";
//   console.log(message + userName);
// }; //- локальна змінна

// sayHi();

// --------------------------//
// Повернення значень функції //
// --------------------------//
//- функція може щось повертати, тобто віддавати результат своєї роботи; для цього використовується ключове слово return

// function sum(a, b) {
//   return a + b;
// } //- якщо коротка функція, якщо довга то можна через нову змінну let c = a+b; return c;

// let result = sum(7, 8);
// console.log(result );

//- у функціях може бути багато чого: if esle, switch, цикли, інші функції, але якщо функція щось повертає, то після return код не виконується

// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);

//   return;
// };

// testFunk(5, 8);

// --------------------------//
// Порядок виконання коду //
// --------------------------//
//- спочатку виконується весь код, який знаходиться поза функціями, потім виконується код всередині функцій, коли вони викликаються
//- аргументи преедаються зліва на право, якщо аргументів більше ніж параметрів, то вони будуть ігноруватися; якщо параметрів більше ніж аргументів, то параметри будуть undefined

// const a = function () {
//   c();
//   console.log("function a");
//   b();
// };

// const b = function () {
//   console.log("function b");
// };

// const c = function () {
//   console.log("function c");
// };

// a(); //- визвавши а воно йде в першу функцію, там викликає с, потім виконується код всередині а, потім викликає b, і виконується код всередині b

// --------------------------//
// Аргументи і rest //
// --------------------------//
//- кожна функція крім стрілочних має свій псевдомасив arguments, який містить всі аргументи, які були передані в функцію; у стрілочних функціях arguments немає, але є rest оператор

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 3, 5);

//- rest оператор дозволяє зібрати всі аргументи в масив, якщо їх більше ніж параметрів (якщо ми не знаємо скільки аргументів прийде)

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 3, 5);

// addName(1, 3, 5, 365, 58);

// --------------------------//
// callback //
// --------------------------//
//- це фукнкції зворотьного виклику; це функція яка ми очікуємо що буде виконана пізніше

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log("You said Yes");
// }

// function showCancel() {
//   console.log("You said No");
// }

// ask("Yes or no?", showOk, showCancel); //- showOk і showCancel це функції зворотнього виклику - callback

// hof - high order function //

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// // hello("Ann"); //- 1 way

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// }; //- 2 way

// searchName(hello); //- тобто перша вункція вирахувала імʼя, а друга вписала його

// --------------------------//
// приклад задачі 1 //

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   } else {
//     console.log("Goodbye");
//   }
// }

// checkAge(20);

//- можна записати так (без else):

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   }
//   return console.log("Goodbye");
// }

// checkAge(16);
//- тобто інтерпретатор зайшов, перевірив код, якщо не то пішов далі в тругий return, якщо так то залишився і далі вже НЕ піде

// --------------------------//
// приклад задачі 2 //
//- return не обовʼязково має щось повертати

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Go to movie!");
// }

// showMovie(34);

// --------------------------//
// Стрілочні функції //
// --------------------------//
//- особливість: немає псевдомасиву arguments

// const test = () => {}; //- синтаксис стрілочної функції

// const test = (arg) => {
//   console.log(arg);
// };

// test("Hello");

// const showMovie = (age) => {
//   if (age > 21) {
//     return console.log("Hello");
//   }
//   return console.log("Bye");
// };

// showMovie(22);

// --------------------------//
// Контексти і виклики //
// --------------------------//
//- Стек – структура даних, яка працює за принципом останнім прийшов – першим вийшов (LIFO – Last In, First Out)

// const a = () => {
//   console.log("a");
// };

// const b = () => {
//   console.log("b");
// };

// const c = () => {
//   console.log("c");
//   a();
//   b();
// };

// c();

// --------------------------//
// Практика //
// --------------------------//

// const numberRef = document.querySelector('input[name = "number"]');

// // console.log(numberRef.value);

// const buttonRef = document.querySelector("button"); //- так він зловить найпершу кнопку, тому важливо давати певний селектор (напр  id)

// buttonRef.addEventListener("click", () => {
//   console.log(numberRef.value);
// });

//- addEventListener -це слухач, який дозволяє обробляти якусь подію (в дужках два аргументи: 1й на яку подію саю спрацювати, 2й це функція яка буде виконуватись при цій події)

//- варіант якщо додавати ще +10 до числа:

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector('input[name = "number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));

//- памʼятаємо що з input завжди приходить string (тому якщо не опрацювати то воно прстодо числа в кінці додаватиме 10)

//- querySelector можна вішати на будь-які  теги, класи, вбо по id і таким чином отримуати значення з тегів

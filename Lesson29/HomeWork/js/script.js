// ----- 1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент < div id = "text" > зникав

// const btn = document.querySelector("#btn");
// const text = document.querySelector("#text");

// btn.addEventListener("click", () => text.classList.add("hidden")); //- 1в

// btn.addEventListener("click", () => (text.style.display = "none")); //- 2в

// ----- 2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала

// const btn2 = document.querySelector("#btn2");

// btn2.addEventListener("click", () => btn2.classList.add("hidden"));

// ----- 3----
// Створіть дерево, яке показує / приховує дочірні вузли при кліці

// const books = document.querySelector(".books");

// books.addEventListener("click", handleClick);

// function handleClick(event) {
//   console.log("Your choice: ", event.target);

//   const subList = event.target.querySelector(".bookExample");

//   if (!subList) {
//     return;
//   }
//   subList.classList.toggle("show");
// }

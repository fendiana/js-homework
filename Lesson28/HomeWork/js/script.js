// -----1----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

let elem = document.querySelector("div");
console.log(elem.getAttribute("data-widget-name"));

// Взаимодействие с пользователем

"use strict";

// alert("Hello!");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18"); // + перед prompt преобразовывает к числу
// console.log(typeof answer); // typeof возвращает тип данных
// console.log(answer + 5);

const answers = [];

answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

// document.write(answers);

console.log(answers);
console.log(typeof answers);
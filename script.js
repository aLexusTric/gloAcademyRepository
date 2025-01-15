'use strict';
alert("Hello!");

let title = prompt("Как называется ваш проект?");
let screens = prompt('Какие типы экранов нужно разработать?', 'пример: "Простые, Сложные, Интерактивные " ');
let screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 23;

let addService1 = prompt('Какой дополнительный тип услуги нужен?', "пример: Service 1, Service 2");
let addServicePrice1 = Number(prompt('Сколько это будет стоить?'));

let addService2 = prompt('Какой дополнительный тип услуги нужен?', "пример: Service 1, Service 2");
let addServicePrice2 = Number(prompt('Сколько это будет стоить?'));

let fullPrice = Number(screenPrice) + Number(addServicePrice1) + Number(addServicePrice2);

let brokerFeePercentage = fullPrice * (rollback / 100);
console.log(brokerFeePercentage);

let servicePercentPrice = Math.ceil(fullPrice - brokerFeePercentage);
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
    console.log('Даём скидку 10%')
}
else if (fullPrice >= 15000) {
    console.log('Даём скидку 5%')
}
else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотренна');
}
else {
    console.log('Что-то пошло не так');
}

console.log("Hello from the console!");
console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + "$");
console.log("Стоимость разработки сайта " + fullPrice + "$");
console.log(screens.toLowerCase(screens.split(",")));
console.log("Hello from the console!");
console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + "$");
console.log("Стоимость разработки сайта " + fullPrice + "$");
console.log(screens.toLowerCase(screens.split(",")));
'use strict';
let title = "First project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 42;
let rollback = 23;
let fullPrice = 6000;
let adaptive = true;

alert("Hello!");
console.log("Hello from the console!");
console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + "$");
console.log("Стоимость разработки сайта " + fullPrice + "$");
console.log(screens.toLowerCase(screens.split(",")));

title = prompt("Как называется ваш проект?");
screens = prompt('Какие типы экранов нужно разработать?', 'пример: "Простые, Сложные, Интерактивные " ');
screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

let addService1;
let addService2;
let addServicePrice1;
let addServicePrice2;

addService1 = prompt('Какой дополнительный тип услуги нужен?', "пример: Service 1, Service 2");
addServicePrice1 = Number(prompt('Сколько это будет стоить?'));

addService2 = prompt('Какой дополнительный тип услуги нужен?', "пример: Service 1, Service 2");
addServicePrice2 = Number(prompt('Сколько это будет стоить?'));

fullPrice = Number(screenPrice) + Number(addServicePrice1) + Number(addServicePrice2);

let brokerFeePercentage = fullPrice * (rollback / 100);
console.log(brokerFeePercentage);

let servicePercentPrice = fullPrice - brokerFeePercentage;
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log('Даём скидку 10%')
}
else if (fullPrice > 15000) {
    console.log('Даём скидку 5%')
}
else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотренна');
}
else {
    console.log('Что-то пошло не так');
}
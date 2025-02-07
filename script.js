'use strict';
alert("Hello!");

let title = prompt("Как называется ваш проект?");
let screens = prompt('Какие типы экранов нужно разработать?', 'пример: "Простые, Сложные, Интерактивные " ');
let screenPrice;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 23;

let addService1;
let addServicePrice1;

let addService2;
let addServicePrice2;
let allServicePrice;
let fullPrice;
let brokerFeePercentage;
let servicePercentPrice;

addService1 = prompt('Какой дополнительный тип услуги нужен?', "пример: Service 1, Service 2");
while(isNaN(addServicePrice1) || addServicePrice1 <=0){
    addServicePrice1 = Number(prompt('Сколько это будет стоить?'));
}

addService2 = prompt('Какой дополнительный тип услуги нужен?', "пример: Service 1, Service 2");
while(isNaN(addServicePrice2) || addServicePrice2 <=0){
    addServicePrice2 = Number(prompt('Сколько это будет стоить?'));
}

do{
    screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
} while (isNaN(screenPrice) || screenPrice <= 0);

const showTypeOf = function (relevant){
    return typeof(relevant);
}

const getAllServicePrices = function (){
    return addServicePrice1 + addServicePrice2;
  }

function getFullPrice(){
  return screenPrice + allServicePrice;
}

function getRollbackMessage(){
    if (fullPrice >= 30000){
        return 'Даём скидку 10%'
    }
    else if (fullPrice >= 15000) {
        return 'Даём скидку 5%'
    }
    else if (fullPrice < 15000 && fullPrice > 0) {
        return 'Скидка не предусмотренна';
    }
    else {
        return 'Что-то пошло не так';
    }
    }

const getServicePercentPrices = function(){
    let servicePercentPrice = Math.ceil(fullPrice - brokerFeePercentage);
    return servicePercentPrice;
}

const getTitle = function(title) {
    return title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase();
}

allServicePrice = getAllServicePrices(); 
fullPrice = getFullPrice();
brokerFeePercentage = fullPrice * (rollback / 100);
servicePercentPrice = Math.ceil(fullPrice - brokerFeePercentage);

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(getRollbackMessage());
console.log("Стоимость верстки экранов " + screenPrice + "$");
console.log(`Стоимость разроботки веб-сайта ${servicePercentPrice}`);
console.log(screens.toLowerCase(screens.split(",")));
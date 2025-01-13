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
console.log("Стоимость разроботки сайта " + fullPrice + "$");
screens.toLowerCase();
console.log(screens.split(" "));
brokerFeePercentage = fullPrice * (rollback / 100);
console.log(brokerFeePercentage);
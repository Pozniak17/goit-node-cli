// CommonJS
//* імпорт, якщо з бібліотеки
// const nodemon = require("nodemon");

//* імпорт з файлу
const obj = require("./users");
// console.log(obj);

const { admins } = require("./users");
console.log(admins);

// const { getCurrentMonth } = require("./date");
// const currentMonth = getCurrentMonth();
// console.log(`Now ${currentMonth} month `);

const currentMonth = require("./date").getCurrentMonth();
console.log(`Now ${currentMonth} month `);

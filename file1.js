const { a: x } = require("./file2.js");
const { a: y } = require("./file3.js");

// const { add } = require("./utils/add.js");
// const { sub } = require("./utils/sub.js");
const { add, sub } = require("./utils");

console.log(add(x, y));
console.log(sub(y, x));

import { a } from "./file_es2.mjs"
import { a as y } from "./file_es3.mjs";

import { add, sub } from "./utils-copy/index.mjs";

console.log(a);
console.log(y);

console.log(add(a, y));
console.log(sub(y, a));

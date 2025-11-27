const crypto = require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //not recommended
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex");
console.log("input: password123");
console.log("MD5 HashedPassword: ", md5Hash);
console.log("MD5 Hash2 : ", md5Hash2);

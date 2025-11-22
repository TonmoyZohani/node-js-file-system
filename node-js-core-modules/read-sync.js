const fs = require("fs");

console.log("Start Reading...");

try {
  const data = fs.readFileSync("./data/diary.txt", "utf8");
  console.log("File Content");
  console.log(data);
} catch (err) {
  console.log("Error", err);
}

console.log("Finished...");

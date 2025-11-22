const fs = require("fs");

const content1 = "This is a content \n nodejs is awesome!!!";

try {
  fs.writeFileSync("./output/test-sync.txt", content1);
} catch (err) {
  console.log("Error", err);
}

const content2 = "This is a content \n nodejs is awesome!!!";

fs.writeFile("./output/test-async.txt", content2, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success");
  }
});

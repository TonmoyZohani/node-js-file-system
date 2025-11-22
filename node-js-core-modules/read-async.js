const fs = require("fs");

console.log("Start Reading...");

fs.readFile('./data/diary.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log("File Content");
        console.log(data);
    }
})

console.log("Finished...");

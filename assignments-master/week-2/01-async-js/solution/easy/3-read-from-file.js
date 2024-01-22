const fs=require("fs");

async function read(filePath){
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
        });
}

read("/Users/rahulthakur/Documents/Mern-Assignment/assignments-master/week-2/01-async-js/easy/3-read-from-file.md");

const fs=require("fs");

function write(fileName){
    let data=prompt("Enter what you want to write to file");

    fs.writeFile(fileName,data,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("file written successful!");
    })
}

write("/Users/rahulthakur/Documents/Mern-Assignment/assignments-master/week-2/01-async-js/solution/easy/4-file-write-test.txt");


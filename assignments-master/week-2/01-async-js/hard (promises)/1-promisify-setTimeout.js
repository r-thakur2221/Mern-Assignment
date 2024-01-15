/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{
                console.log(`I am printed after ${n} second!`);
                resolve();
            },n*1000)
        }
        catch(e){
            console.log(`Error in priniting...`);
            reject();
        }
    })
}

module.exports = wait;

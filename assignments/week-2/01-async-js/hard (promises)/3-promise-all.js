/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{
                console.log(`I am printed after ${t} second!  from wait1`);
                resolve();
            },n*1000)
        }
        catch(e){
            console.log(`Error in priniting wait1...`);
            reject();
        }
    })
}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;
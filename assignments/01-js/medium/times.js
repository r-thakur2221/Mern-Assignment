/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function sum(n){
    let sum=0;
    /*
        loop is taking time longer with longer input
    */
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    sum=(n*(n+1))/2;//this is taking 0ms using formula
    return sum;
}

function calculateTime(n) {
    let t1=Date.now();
    let sumAll=sum(n);
    let t2=Date.now();
    return t2-t1;
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));

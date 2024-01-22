/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(chechStr) {
  let mid=parseInt(chechStr.length/2);
  let str=chechStr.toLowerCase().trim().split(" ").join("").split(RegExp("[,?!'.]")).join("").split("");
  for(let i=0;i<mid;i++){
    if(str.at(i)!==str.at(str.length-i-1))
      return false;
  }
  return true;
}

// console.log(isPalindrome('Eva, can I see bees in a cave?'));

module.exports = isPalindrome;

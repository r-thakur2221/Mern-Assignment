/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(chechStr) {
  let mid=parseInt(chechStr.length/2);
  let str=chechStr.toLowerCase();
  for(let i=0;i<mid;i++){
    if(str.charAt(i)!==str.charAt(str.length-i-1))
      return false;
  }
  return true;
}

console.log(isPalindrome("racecar"));

module.exports = isPalindrome;

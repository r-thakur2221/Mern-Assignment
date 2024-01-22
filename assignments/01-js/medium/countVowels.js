/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    str.toLowerCase().split("").forEach((item) => {
      switch(item){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":{
          count=count+1;
          break;
        }
      }
    });
    return count;
}

module.exports = countVowels;
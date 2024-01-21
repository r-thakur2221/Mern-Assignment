/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!==str2.length){
    return false;
  }
  let result=[];
  for(let i=0;i<str1.length;i++){
    let checkFor=str1.substr(i,1).toUpperCase();
    for(let j=0;j<str2.length;j++){
      if(checkFor===str2.toUpperCase().split("")[j])
        { 
          result[i]=true;
          break;
        }
        else{
          result[i]=false;
        }
    }
  }

  return result.every(item=>{
    if(item===false){
      return false;
    }
    return true;
  });
}

module.exports = isAnagram;

function reverse(word){
  const wordArray = word.split("")
  const reversedArray = wordArray.reverse()
  const reversedWord = reversedArray.join("")
  return reversedWord
  
}
function isPalindrome(word) {
const reversedWord = reverse(word)
if (word === reversedWord)
return true
else{ return false}
  // Write your algorithm here
  
}

/* 
  Add your pseudocode here
  create function
  write out word backwords
  then check if check if word === word backwords 
  return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

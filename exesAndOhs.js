// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const countStr = {}
   str = str.toLowerCase().split('')
   for(let char of str){
     countStr[char] = countStr[char] ? ++countStr[char] : 1
    }
   return (countStr.x === countStr.o)
}
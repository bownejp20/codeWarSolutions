// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!

const sumSquareEvenRootOdd = ns => {
  let newArr = []
  ns.forEach(num => {
    if(num % 2 === 0){
      newArr.push(num * num)
    }else if(num % 2 === 1){
      newArr.push(Math.sqrt(num))
    }
  })
   console.log(newArr)
   return  +newArr.reduce((accum, num) => accum + num, 0).toFixed(2)
    
 };
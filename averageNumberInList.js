// Write a function which calculates the average of the numbers in a given list. and returns 0 if the array is empty 

function findAverage(array) {
  if(array.length === 0) return 0
  let total = 0
  for(let i = 0; i < array.length; i++) {
     let arrayNum = array[i]
     total += arrayNum
  }
  return total / array.length
}

//write function that take sin the array
//creat a var that holds the average
//loop through the array
//add empty var to each item
//divide by the legth
//return var 

// Return a greeting string
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :) 
function hero(bullets, dragons){
  let bulletsNeeded = dragons * 2
  if(bullets >= bulletsNeeded) {
    return true
  }else {
    return false
  }
}
//each dragon takes 2 bullets to kill
//how many should the hero carry
//gunna grab a specific amount of bullets going to fight a specific number of dragons
//if he survives return true if not false



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





// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

//write a function that calculates body mas index
//create var for equation 
//create if statemnet 

function bmi(weight, height) {
 let bmi = weight / height**2
 if(bmi <= 18.5) {
   return 'Underweight'
 }else if (bmi <= 25.0 ) {
   return 'Normal'
 }else if(bmi <= 30.0) {
   return 'Overweight'
 }else if(bmi > 30) {
   return "Obese"
 }
}
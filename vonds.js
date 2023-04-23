//true when employed
//false when vacation 
//return if employed and not on vacation = true 

function setAlarm(employed, vacation){
  if(employed && !vacation){
    return 'true'
  }else{
    return 'false'
  }
}
setAlarm(true, false)


let count = 1

for(let i = 0; i < 2; i++){
  // count *= 4
  console.log(i)
}
console.log(count)
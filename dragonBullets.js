
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :) 

//each dragon takes 2 bullets to kill
//how many should the hero carry
//gunna grab a specific amount of bullets going to fight a specific number of dragons
//if he survives return true if not false
function hero(bullets, dragons){
  let bulletsNeeded = dragons * 2
  if(bullets >= bulletsNeeded) {
    return true
  }else {
    return false
  }
}
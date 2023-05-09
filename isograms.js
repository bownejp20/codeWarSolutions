// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str){
  const letters = {}
   str = str.toLowerCase()
  for(let i = 0; i < str.length; i++){
    if(letters[str[i]]){
      return false
    }else {
      letters[str[i]] = true
    }
  }
  return true
}

// or you can do it by using Count

const isIsogram = (str) => {
  const letterCount = {}
  str = str.toLowerCase()
  for(let letter of str){
    letterCount[letter] = letterCount[letter]? ++letterCount[letter]:1
    if(letterCount[letter] > 1){
      return false
    }
  }
  return true
  
}
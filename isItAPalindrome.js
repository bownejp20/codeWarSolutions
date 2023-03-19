// create a function that takes an array (with ONLY numeric values) and returns an array with inverted values
//     [5, -1, 6, -7] => [5, 1, -6, 7]

function invertNumbers(array) {
  return array.map(n => -n)
}
console.log(invertNumbers([5, -1, 6, -7]))
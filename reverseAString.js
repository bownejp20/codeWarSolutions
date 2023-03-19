// create an function that reverses a string

const reverstring = (string) => {
  return string.split('').reverse().join('')
}
console.log(reverstring('lady'))
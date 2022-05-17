/**
 * https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 * case:	
 * 1. return "Even"
 * 2. return "Odd"
 * @param {*} number
 * @returns "Odd" or "Even"
 */

 function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
  }
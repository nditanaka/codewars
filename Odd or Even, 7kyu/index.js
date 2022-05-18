/**
 * https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
 * Task:
 * Given a list of integers, determine whether the sum of its elements is odd or even.
 * Give your answer as a string matching "odd" or "even".
 * If the input array is empty consider it as: [0] (array with a zero).
 * Examples:
 * a) Input: [0]
 * Output: "even"
 * 
 * b) Input: [0, 1, 4]
 * Output: "odd"
 * 
 * c) Input: [0, -1, -5]
 * Output: "even"
 * 
 * @param {*} array
 * @returns 'odd' or 'even'
 * 
 * time complexity: O(n)
 * space complexity: O(1)
 */
function oddOrEven(array) {
    let sum
    if(array.length === 1){sum = array[0]}
     sum = array.reduce(function(i, j){
       return i + j
     }, 0)
     return sum % 2 === 0 ? 'even' : 'odd'
  }
  
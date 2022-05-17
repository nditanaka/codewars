/**
 * https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
 * We need a function that can transform a string into a number. What ways of achieving this do you know?
 * Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
 * Examples:
 * a) "1234" --> 1234
 * b) "605"  --> 605
 * c) "1405" --> 1405
 * d) "-7" --> -7
 * @param {*} str
 * @returns number value implicitly converted from a string
 * 
 * time complexity: O(1)
 * space complexity: O(1)
 */
 const stringToNumber = function(str){
    return +str;
  }
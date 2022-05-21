/**
 * https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
 *  You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 * 
 * @param {String} str
 * @returns string without first and last character
 * 
 * time complexity: O(1)
 * space complexity: O(1)
 */
 function removeChar(str){
    let strhalf = str.split('')
    strhalf.pop()
    return strhalf.join('').slice(1)
  };
  
  
  
  
  
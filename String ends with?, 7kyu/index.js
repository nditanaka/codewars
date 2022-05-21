/**
 * https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript/6226b9b12bd7a2004dcdac68
 * 
 * Complete the solution so that it returns true if 
 * the first argument(string) passed in ends with the 2nd argument (also a string).
 * 
 * Examples:
 * 
 * solution('abc', 'bc') // returns true
 * solution('abc', 'd') // returns false
 * 
 * @param {String} str
 * @param {String} ending
 * @returns if return str.slice(ending.length * (-1)) === ending
 * 
 * time complexity: O(n)
 * space complexity: O(1)
 */
 function solution(str, ending){
    //   check for length of ending, then return str.slice(ending.length) and check if it is equal to ending.
    if(ending.length < 1){return true}
    return str.slice(ending.length * (-1)) === ending
  }
  
  
  
  
  
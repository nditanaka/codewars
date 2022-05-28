/**
 * https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
 * 
 * Clock shows h hours, m minutes and s seconds after midnight.
 * 
 * Your task is to write a function which returns the time since midnight in milliseconds.
 * 
 * Example:
 * h = 0
 * m = 1
 * s = 1
 * 
 * result = 61000
 * Input constraints:
 * 
 * 0 <= h <= 23
 * 0 <= m <= 59
 * 0 <= s <= 59
 * 
 * NOTE: All numbers will be whole numbers greater than 0.
 * @param {Number} h
 * @param {Number} m
 * @param {Number} s
 * 
 * BIG (O)
 * time complexity: O(1)
 * space complexity: O(1)
 * 
 **/
 function past(h, m, s){
    let miliseconds = (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)
    return miliseconds
  }
/**
 * https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
 * 
 * Write a function named setAlarm which receives two parameters. 
 * The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
 * The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). 
 * It should return false otherwise. 
 * 
 * Examples:
 * 
 * setAlarm(true, true) -> false
 * setAlarm(false, true) -> false
 * setAlarm(false, false) -> false
 * setAlarm(true, false) -> true
 * 
 * @param {Boolean} employed 
 * @param {Boolean} vacation
 * @returns true if employed is true and vacation is false
 * 
 * BIG (O)
 * time complexity: O(1)
 * space complexity: O(1)
 */

 function setAlarm(employed, vacation){
    return employed ? vacation === false : false
  }
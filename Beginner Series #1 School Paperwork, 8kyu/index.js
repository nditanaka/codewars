/**
 * https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
 * Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
 * 
 * Example:
 * n= 5, m=5: 25
 * n=-5, m=5:  0
 * 
 * @param {Number} n
 * @param {Number} m
 * @returns number 0 or n * m
 * 
 * time complexity: O(1)
 * space complexity: O(1)
 */
 function paperwork(n, m) {
    if(n <= 0|| m < 0){
      return 0
    }else{
      return n * m
    }  
  }
  
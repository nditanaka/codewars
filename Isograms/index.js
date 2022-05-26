/**
 * https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
 * 
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 * Implement a function that determines whether a string that contains only letters is an isogram. 
 * Assume the empty string is an isogram. Ignore letter case.
 * 
 * Example: (Input --> Output)
 * 
 * "Dermatoglyphics" --> true
 * "aba" --> false
 * "moOse" --> false (ignore letter case)
 * 
 * NOTE: All numbers will be whole numbers greater than 0.
 * @param {String} str
 * @returns {Boolean} false if a number has count > 1
 * 
 * BIG (O)
 * time complexity: O(n)
 * space complexity: O(n)
 * 
 * PSEUDOCODE
 * convert str to array, iterate over array and store each letter and count as {letter:count,letter:count}
 * iterate over count and return false if any of the keys have a count > 1  
 **/
 function isIsogram(str){
    let strArr = str.split('').map(i => i.toLowerCase())
    let count = {}
    for(let el of strArr){
      count[el] = (count[el] || 0) + 1
    }
    for(let key in count){
      if(count[key] > 1){
        return false
      }
    }
    return true
  }
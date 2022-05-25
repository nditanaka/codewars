/**
 * https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
 * 
 * This time no story, no theory. The examples below show you how to write function accum:
 * 
 * Examples:
 * 
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * 
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 * 
 * @param {String} s
 * @returns hash of string according to rule
 * 
 * BIG (O)
 * time complexity: O(n)
 * space complexity: O(n)
 * 
 * PSEUDOCODE
 * store length of s
 * iterate over each letter of s and append it x current count plus '-'   
 **/
 function accum(s) {
      let length = s.length
      console.log('length',length)
      let result = ''
      for(let i = 0; i < length; i++){
        result += s[i].toUpperCase()
        result += s[i].toLowerCase().repeat(i)
        if(i !== length - 1){
              result += '-'
        }
      }
      return result
    }
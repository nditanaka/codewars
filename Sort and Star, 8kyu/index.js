/**
 * https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
 * 
 * You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
 * The returned value must be a string, and have "***" between each of its letters.
 * 
 * You should not remove or add elements from/to the array.
 * 
 * @param {Array} s
 * @param {Boolean} vacation
 * @returns string of first element of sorted array, s with stars *** appended
 * 
 * BIG (O)
 * time complexity: O(nlogn) -> T(n) + T(logn) for comparisons
 * space complexity: O(n)
 */

 function twoSort(s) {
      let sorted = s.sort()
      let sortedFirstEl = []
      for(let i = 0; i < sorted[0].length; i++){
        sortedFirstEl.push(sorted[0][i])
        sortedFirstEl.push('***')
      }
      sortedFirstEl.pop()
      return sortedFirstEl.join('')
    
    }

console.log(twoSort(['hello','my','name','is', 'abe']))
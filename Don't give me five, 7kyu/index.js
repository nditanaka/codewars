/**
 * https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
 * In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
 * Examples:
 * a) 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
 * b) 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
 * @param {*} start
 * @param {*} end
 * @returns count of range excluding numbers with 5 as a digit in them
 * 
 * time complexity: O(n)
 * space complexity: O(n) from the space allocated for the arr
 */
function dontGiveMeFive(start, end) {
    let arr = []
    for(let i = start; i <= end; i++){
      arr.push(i.toString())
    }
    let cleanedArr = arr.filter(i => !i.includes('5'))
    return cleanedArr.length
  }
/**
 * https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
 * 
 * For example,
 * 
 * [true,  true,  true,  false,
 * true,  true,  true,  true ,
 * true,  false, true,  false,
 * true,  false, false, true ,
 * true,  true,  true,  true ,
 * false, false, true,  true]
 * 
 * The correct answer would be 17.
 * 
 * Hint: Don't forget to check for bad values like null/undefined
 * 
 * @param {Array} arrayOfSheep
 * @returns count of truthy elements in array
 * 
 * time complexity: O(n)
 * space complexity: O(n)
 */
 function countSheeps(arrayOfSheep) {
    let count = 0
    for(let item of arrayOfSheep){
      count = item ? count + 1 : count
    }
    return count
  }
  
  
  
  
  
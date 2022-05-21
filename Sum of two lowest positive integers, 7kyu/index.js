/**
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
 * 
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
 * No floats or non-positive integers will be passed.
 * 
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * 
 * 10, 343445353, 3453445, 3453545353453] should return 3453455.
 * 
 * @param {Array} numbers
 * @returns count of truthy elements in array
 * 
 * time complexity: O(n)
 * space complexity: O(1)
 */
 function sumTwoSmallestNumbers(numbers) {  
    let min = numbers[0]
    let min2 = numbers[1]
    for(let num of numbers){
      if(num <= min){
        if(num !== min2){
          min = num
        }
      }
    }
    for(let num of numbers){
      if(num <= min2){
        if(num !== min){
          min2 = num
        }
      }
    }
    return min + min2
  }
  
  
  
  
  
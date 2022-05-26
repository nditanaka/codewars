/**
 * https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
 * 
 * Write Number in Expanded Form
 * You will be given a number and you will need to return it as a string in Expanded Form. 
 * 
 * For example:
 * 
 * expandedForm(12); // Should return '10 + 2
 * expandedForm(42); // Should return '40 + 2'
 * expandedForm(70304); // Should return '70000 + 300 + 4'
 * 
 * NOTE: All numbers will be whole numbers greater than 0.
 * @param {Number} num
 * @returns Expanded form of number
 * 
 * BIG (O)
 * time complexity: O(n)
 * space complexity: O(n)
 * 
 * PSEUDOCODE
 * iterate over num and turn it into array of inidividual digits. 
 * where, num[i] * (10 ^ length -1)  
 **/

 function expandedForm(num) {
    let numStrArr = String(num).split('')
    let count = numStrArr.length - 1
    let result = []
    for(let i= 0; i< numStrArr.length; i++){
      let nextChar = String(numStrArr[i] * Math.pow(10, count))
      count--
      if(nextChar != 0){
        result.push(nextChar)
        if(i < numStrArr.length - 1)result.push('+')
      }
    }
     if (result[result.length -1] === '+') {
         result.pop()
     }
    return result.join(' ')
 }
  
console.log(expandedForm(18929))
console.log(expandedForm(18009))
console.log(expandedForm(189290))
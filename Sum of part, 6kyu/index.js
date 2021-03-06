/**
 * https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
 * 
 * Let us consider this example (array written in general format):
 * 
 * ls = [0, 1, 3, 6, 10]
 * 
 * Its following parts:
 * 
 * ls = [0, 1, 3, 6, 10]
 * ls = [1, 3, 6, 10]
 * ls = [3, 6, 10]
 * ls = [6, 10]
 * ls = [10]
 * ls = []
 * 
 * The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
 * 
 * The function parts_sums (or its variants in other languages) will take as parameter a list ls
 * and return a list of the sums of its parts as defined above.
 * 
 * Other Examples:
 * 
 * ls = [1, 2, 3, 4, 5, 6] 
 * parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]
 * 
 * ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
 * parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
 * 
 * Notes
 * - Take a look at performance: some lists have thousands of elements.
 * - Please ask before translating.
 * 
 * @param {Array} ls
 * @returns array with sum of sub-arrays' elements
 * 
 * BIG (O)
 * time complexity: O(n)
 * space complexity: O(1)
 */
 function partsSums(ls) {
     /**  
    * SOLUTION PSEUDOCODE
    * first we insert 0 at the beginning of the array
    * then we calculate the sum of every element of input array, ls with 0 at the start
    * then we iterate over the input array, ls with 0 at the beginning, and map each element of array ls, starting with 0, to the sum of elements - element v.
    */
     ls.unshift(0)
     let sum = ls.reduce(function (i, j) { return i + j }, 0)
     return ls.map(v => sum = sum - v)
  }


function naivepartsSums(ls) {
    // does not scale to arrays with 1000s of elements
        console.log('ls', ls)
        if(ls.length === 0){return [0]}
        
        function makeSlices(ls){
          let slicesArr = []
          for(let i = 0; i <= ls.length; i++){
          let tempSlice = ls.slice(i)
          slicesArr.push(tempSlice)
          }
          
          return slicesArr   
        }
        
        let slices = makeSlices(ls)
        console.log('slices', slices)
      
        let sumsArray = []
      
        function generateSumsArr(slices) {
          let tempSlices = slices
          for(let i = 0; i <= tempSlices.length - 1; i++){
            let tempSum = tempSlices[i].reduce(function(a, b) {
              return a + b
            }, 0)
            sumsArray.push(tempSum)
          }
          console.log('sumsArray', sumsArray)
           return sumsArray
        }
        generateSumsArr(slices)
        return sumsArray  
}

console.log(partsSums([1, 2, 3, 4, 5]))
// console.log(naivepartsSums([1,2,3,4,5]))


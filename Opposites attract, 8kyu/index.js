/**
 * https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 *
 * Write a function that will take the number of petals of each flower
 * and return true if they are in love and false if they aren't.
 * @param {*} flower1
 * @param {*} flower2
 * @returns true or false
 * 
 * time complexity: O(1)
 * space complexity: O(1)
 */
  function lovefunc(flower1, flower2){
    function isEven(num){
      return num % 2 === 0
    }
    if(!isEven(flower1)){
      if(isEven(flower2)){
        return true
      }
    }else if(!isEven(flower2)){
      if(isEven(flower1)){
        return true
      }
    }
    return false
  }
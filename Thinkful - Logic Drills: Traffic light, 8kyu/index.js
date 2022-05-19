/**
 * https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
 * Task:
 * You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
 * Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
 * 
 * For example, update_light('green') should return 'yellow'.
 * 
 * @param {*} current color
 * @returns next color
 * 
 * time complexity: O(1)
 * space complexity: O(1)
 */
function updateLight(current) {
    switch(current){
        case 'green':
          return 'yellow'
          break
        case 'yellow':
          return 'red'
          break
        case 'red':
          return 'green'
          break
    }
  }
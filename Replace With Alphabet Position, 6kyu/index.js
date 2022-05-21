/**
 * https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 * Welcome. 
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * 
 * Example:
 * 
 * "a" = 1, "b" = 2, etc.
 * alphabetPosition("The sunset sets at twelve o' clock.")
 * Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 * 
 * @param {String} str
 * @returns hash of string alphabet positions
 * 
 * time complexity: O(n)
 * space complexity: O(n)
 */
 function alphabetPosition(text) {
    let alpha = {'a': 1, 'c': 3, 'b': 2, 'e': 5, 'd': 4, 'g': 7, 'f': 6, 'i': 9, 'h': 8, 'k': 11, 'j': 10, 'm': 13, 'l': 12, 'o': 15, 'n': 14, 'q': 17, 'p': 16, 's': 19, 'r': 18, 'u': 21, 't': 20, 'w': 23, 'v': 22, 'y': 25, 'x': 24, 'z': 26}
    let translated = ''
    
    for(const element of text){
      let lowered = element.toLowerCase()
      translated += alpha[lowered] ? alpha[lowered] + ' ' : ''
    }
    
    translated = translated.split(' ')
    let formatted = translated.filter(i => i !== '')
    
    return formatted.join(' ')
  }
  
  
  
  
  
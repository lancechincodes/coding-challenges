// R: input of array of strings (words), output words that can be typed with only single row of keyboard 
//    based on example 3, words do not have to be real words

// E:  words = ["Hello","Alaska","Dad","Peace"]
// Can be typed with one row?
// Hello --> No
// Alaska --> Yes
// Dad --> Yes
// Peace --> No
// Return ['Alaska', 'Dad']

// A: psuedocode
// convert words to lowercase first, then join with original word with uppercases

// Time complexity: O(n^2)
// Space complexity: O(n)

var findWords = function(words) {
    // make objects to store keys of letters in each row of keyboard
    const firstRowObj = {
        'q': 'q',
        'w': 'w', 
        'e': 'e',
        'r': 'r',
        't': 't',
        'y': 'y',
        'u': 'u',
        'i': 'i',
        'o':'o',
        'p': 'p'
    }
    
    const secondRowObj = {
        'a': 'a',
        's': 's',
        'd': 'd',
        'f': 'f',
        'g': 'g',
        'h': 'h',
        'j': 'j',
        'k': 'k',
        'l': 'l'
    }
    
    const thirdRowObj = {
        'z': 'z',
        'x': 'x',
        'c': 'c',
        'v': 'v',
        'b': 'b',
        'n': 'n',
        'm': 'm'
    }
    
    // iterate through the array
        // iterate through letters of each word
            // check if all letters are in object
    
    let result = []
    
    for (let word of words) {
        let letterArr = word.toLowerCase().split('')
        let onlyFirstRow = letterArr.every(letter => firstRowObj[letter]) // .every returns boolean
        let onlySecondRow = letterArr.every(letter => secondRowObj[letter])
        let onlyThirdRow = letterArr.every(letter => thirdRowObj[letter])
        
        if (onlyFirstRow || onlySecondRow || onlyThirdRow) {
            result.push(word)
        }
    }    
    return result
};

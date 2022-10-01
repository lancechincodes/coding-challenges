/*
R: Input of integer, convert to roman numeral string
E: 17 // XVII
edge cases: IV - 4, IX - 9, XL - 40, XC - 90, CD - 400, CM - 900
A: 1) Create a conversion table
2) Iterate over Roman conversions
3) Calculate the dividend of num divided the conversions from highest to lowest
4) Once dividend is 1 or more continue
5) Calculate modulus or remainder and set num to be mod
6) Call convert function for as many times it divided smoothly (dividend)
- within convert function take the key as a parameter and concat to the result string
7) Return the result string

*/

// Time complexity: O(n^2) double for loop
// Space complexity: O(n) conversion obj
var intToRoman = function(num) {
    // Make sure to add the six "edge case" instances into conversion object
    let conversion = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    
    let result = ''
    function convert(key) {
        result = result.concat(key)
    }
    
    let div, mod
    for (let key in conversion) {
        div = Math.floor(num / conversion[key])
        if (div >= 1) {
            mod = num % conversion[key]
            num = mod
            for (let i = 0; i < div; i++) {
                convert(key)
            }
        }
    }
    
    return result
};

// Alt sol
// TC: O(n^2)
 // SC: O(n)
 var intToRoman = function(num) {

    let roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let romanConversion = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

    let result = ''
    function buildResult(occurrences,idx) {
        for (let i = 0; i < occurrences; i++) {
            result += roman[idx]
        }    
    }

    let idx = 0
    let quotient = num, remainder, occurrences
    while (idx < romanConversion.length) {
        if (Math.floor(quotient / romanConversion[idx]) > 0) {
            remainder = quotient % romanConversion[idx]
            occurrences = Math.floor(quotient / romanConversion[idx])
            buildResult(occurrences, idx)
            quotient = remainder
        }
        idx++
    }

    return result
};
// R: Convert Roman numeral string into integer
// E: 
// Different cases (6) 
// pattern - when smaller number before a larger number (subtract larger from smaller then skip 1 iteration)
// IV - 4
// IX - 9
// XL - 40
// XC - 90
// CD - 400
// CM - 900
// Otherwise
// I - 1
// V - 5
// X - 10
// L - 50
// C - 500
// M - 1000

// A: 1) Create hash to store key-value pairs of roman to number conversions
// 2) Iterate through each character in string
// 3) If the next character's value is greater than the current
//    - Add the difference between the next and current and move index up 1 (because you are accounting for 2 characters)
// 4) Otherwise
//    - Add value at key to running sum
// 5) Return sum

// Time complexity: O(n) single for loop (dependent on n characters in string)
// Space complexity: O(n) creating hash to hold conversions (dependent on n number of conversions)
var romanToInt = function(s) {
    const conversion = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (conversion[s[i]] < conversion[s[i+1]]) {
            let difference = conversion[s[i+1]] - conversion[s[i]]
            sum += difference
            i++
        }
        else {
            sum += conversion[s[i]]
        }
    }
    return sum
};
// R: Input of a string with combination of 'A', 'L', and 'P'
// Output of 'True' aka attendance award if 
// 'A' is < 2 in string
// 'L' is < 3 consecutive days in string
// return false otherwise

// E:
// s = "AALLPP" return false
// s = "ALLLPPPPP" return false
// s = "PPPPPALLPLL" return true


// A: 
// create a late counter for each time a student is late, and reset counter when 'L' does not show up
// create an absent counter (no need to reset) --> this would optimize space complexity as compared to using a hash

// Time complexity: O(n)
// Space complexity: O(1)

var checkRecord = function(s) {
    let absentCounter = 0
    let lateCounter = 0
    
    for (let i = 0; i < s.length; i++) {
        
        // algorithm for considering lateness
        if (s[i] === 'L') {
             lateCounter++
             if (lateCounter === 3) return false
        }
        else {
            lateCounter = 0
        }
        
        // algorithm for considering absences
        if (s[i] === 'A') {
            absentCounter++
            if (absentCounter === 2) return false
        }
    }
    
    return true
}
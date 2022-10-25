/*
R:
Input - date in YYYY-MM-DD format
Output - day number of the year
Assumptions - 365 days per year except leap years where there are 366

E:
Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.

Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.

A:
- Use substring/slice/split to extract year from string
- Check if leap year (requirements below)
- Create number of days since January (01) hash
- Use substring/slice/split to extract month and day from string
- If after February and leap year -> return days passed by month + current day + 1
- Otherwise -> return days passed by month + current day
*/

// TC: O(m) where m is length of sub-sections of date string (substring method)
// SC: O(n) where n is number of months (hash)
var dayOfYear = function(date) {
    let leapYear = false
    let year = date.substring(0,4)

    // Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400
    if (year % 4 === 0) {
        leapYear = true
        if (year % 100 === 0) {
            leapYear = false
            if (year % 400 === 0) {
                leapYear = true
            }
        }
    }

    // 334 + 31 = 365
    let daysPassedByMonthHash = {
        '01': 0,
        '02': 31,
        '03': 59,
        '04': 90,
        '05': 120,
        '06': 151,
        '07': 181,
        '08': 212,
        '09': 243,
        '10': 273,
        '11': 304,
        '12': 334
    }

    let month = date.substring(5,7)
    let day = Number(date.substring(8,10))

    if (Number(month) >= 3 && leapYear) return daysPassedByMonthHash[month] + day + 1
    else return daysPassedByMonthHash[month] + day
};
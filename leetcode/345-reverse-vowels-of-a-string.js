/*
R: Input - string s 
Task - reverse all of the vowels in the string and return it 
Output - return input string with reversed vowels

E:
Input: s = "hello"
Output: "holle"

A:
1st Approach
- Double for loop 
- First for loop 
    - Check if letter is a vowel
    - If it is, push it onto a vowel arr
- Reverse vowel arr
- initialize result string
- Second for loop 
    - Check if letter is a vowel
        - if not, add letter at index to result string
        - if it is, add the reversed vowel arr's element to result string
- Return the result

2nd Approach
- 2 pointers
- Left and right pointer of s 
- split s string into arr
- create vowels array with lowercase and capitalized vowel letters
- While (left and right don't overlap)
    - if letter at left and right pointer indexes are vowels
        - swap them using destructuring assignments [a,b] = [b,a]
    - if only letter at left is a vowel
        - move right pointer
    - if only letter at right is a vowel 
        - move left pointer
- return joined version of s array
*/
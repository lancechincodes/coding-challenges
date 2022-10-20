/*
R: 
Input - key for decoding alphabet in message 
Output - decoded message

E:
Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"

Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"

A:
- Create empty hash and alphabet arr
- first for loop -> creating the hash by adding space key as well as the first appearance of each letter in the key
- second for loop -> decode the message using the hash
- return the decoded message
*/

// TC: O(n)
// SC: O(n)
var decodeMessage = function(key, message) {
    let hash = {}
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    let j = 0
    hash[' '] = ' ' 
    for (let i = 0; i < key.length; i++) {
        if (!hash[key[i]]) {
            hash[key[i]] = alphabet[j]
            j++
        }
    }

    let decodedMessage = ''
    for (let i = 0; i < message.length; i++) {
        decodedMessage += hash[message[i]]
    }

    return decodedMessage
};
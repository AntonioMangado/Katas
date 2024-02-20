// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let storageStr = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < string.length; i++) {
        alphabet.includes(string[i])
                    ? storageStr += string[i]
                    : storageStr += ` ${string[i]}`
        
    }
    
    return storageStr;
}
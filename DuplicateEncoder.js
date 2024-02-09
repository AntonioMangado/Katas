// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){

    let emptyStr = ""
    for (let i = 0; i < word.length; i++) {

        // filter to find out it there are more than one
        let result = word.split("").filter(x => x.toLowerCase() == word[i].toLowerCase())
        if (result.length > 1) {
            emptyStr += "("
        } else {
            emptyStr += ")"
        }
    }
    return emptyStr

}

// function duplicateEncode(word){
//     let storageStr = ""
//     word.split("")
//         .forEach((x) => {
//             let re = new RegExp(x.toLowerCase(), "gi")
//             word.match(re).length == 1
//                             ? storageStr += "("
//                             : storageStr += ")"
//                     })
        
//     return storageStr
// }
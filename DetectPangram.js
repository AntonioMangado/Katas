function isPangram(string){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let validString = true
    let lowerCaseString = string.toLowerCase();
    for (let i = 0; i < alpha.length; i++) {
        if (!lowerCaseString.includes(alpha[i])) {
            validString = false
        }
    }

    return validString
}

// Using "every" method
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }
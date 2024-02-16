function alphabetPosition(text) {
    let storageString = ""
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    text.toLowerCase()
        .split("")
        .forEach(letter => {
            if (alpha.includes(letter)) {
                storageString += ` ${alpha.indexOf(letter) + 1}`
            }
        })                  
    return storageString.trim()
}   
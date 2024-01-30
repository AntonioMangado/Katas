// Create a tribonacci sequence, first arg is the signature, second arg is the number of elements

function tribonacci(signature,n){

    // Create function to add digits
    function addLast3() {
        return signature[(signature.length-3)] + signature[(signature.length-2)] + signature[(signature.length-1)]
    }

    // Iterate n times adding the sum of the last three numbers to trib
    for (let i = 0; i < n; i++) {
        let digitToAdd = addLast3()
        signature.push(digitToAdd)
    }

    // Return trib with n elements
    return signature.slice(0, n)
}
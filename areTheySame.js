// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


function comp(array1, array2){

    if (array1.includes(null) || array2.includes(null)) {
        return false
    } else {
        return array2.every(function(x){
            return array1.includes(x) || array1.includes(Math.sqrt(x))
        })
    }
}


function comp(array1, array2){
    if (array1 === null || array2 === null) {
        return false   
    } else {
        // Square all numbers in array 1
        let squaredArr = array1.map(num => num**2)

        // Sort numerically both arrays
        let sortedArr = squaredArr.sort((a, b) => a - b)
        let sortedArr2 = array2.sort((a, b) => a - b)

        // Stringify the arrays to be able to compare them
        return JSON.stringify(sortedArr) === JSON.stringify(sortedArr2)
    } 
}



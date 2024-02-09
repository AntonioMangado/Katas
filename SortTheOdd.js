// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


// No methods, just for loops.
function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            for (let j = i+1; j < array.length; j++) {
                if (array[j] % 2 != 0) {
                    if (array[i] > array[j]) {
                        let c = array[i]
                        array[i] = array[j]
                        array[j] = c
                    }
                }
                
            }
        }
        
    }

    return array
}

// With shift method
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 
                                ? odd.shift() 
                                : x
                                         );
}
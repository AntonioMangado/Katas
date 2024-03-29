// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let i = 0;
    while (num >= 10) {
        // Create an array with those numbers
        let numArr = num.toString().split("");

        // Multiply all numbers in the array
        num = numArr.reduce((a,b) => a*b, 1);
        i++;
    }
    return i;
}
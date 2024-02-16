// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {

    let result = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length+1; j++) {
            if (numbers[i] + numbers[j] == target) {
                result.push(i)
                result.push(j)
                break
            }
        }
        if (result.length > 0) {
            break
        }
    }

    return result
}
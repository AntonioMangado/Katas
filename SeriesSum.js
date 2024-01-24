function SeriesSum(n) {

    let sum
    let div = 4

    if (n == 0) sum = 0
    else if (n == 1) sum = 1
    else {
        sum = 1
        for (let i = 1; i < n; i++) {
            sum += 1/div
            div += 3
        }
    }

    return sum.toFixed(2).toString()
}
function sumArray(arr, int) {
    result = []
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] == int) {
                result.push([arr[i], arr[j]])
            }
        }
    }
    console.log(result)
}

sumArray([2, 1, 4, 3], 5) // output: [[2, 3], [1, 4]]
sumArray([1, 8, 10, 3], 11) // output: [[1, 10], [8, 3]]
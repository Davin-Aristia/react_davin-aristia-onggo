function arrSum(arr) {
    if (arr.length < 2){
        arr.length === 1 ? console.log([arr, arr[0]]) : console.log([])
    } else{
        let maxResult = arr[0] + arr[1]
        let result = [arr[0], arr[1]]
        let tempMaxResult, tempResult
        
        for (let i = 0; i < arr.length; i++) {
            tempMaxResult = arr[i]
            tempResult = [arr[i]]
            for (let j = i+1; j < arr.length; j++) {
                tempMaxResult += arr[j]
                tempResult.push(arr[j])
                if (tempMaxResult > maxResult) {
                    maxResult = tempMaxResult
                    result = [...tempResult]
                }
            }
            
        }
        console.log([result, maxResult])
    }
}

arrSum([-2, -3, 4, -1, -2, 1, 5, -3])// output: [[4, -1, -2, 1, 5], 7]
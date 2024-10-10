function isArithmeticProgression(numbers) {
    if (numbers.length < 2) {
        return false
    } else {
        step = numbers[1] - numbers[0]
        for (let i = numbers.length -1; i > 1; i--){
            if (numbers[i] - numbers[i-1] !== step){
                return false
            }
        }
        return true
    }
}

console.log(isArithmeticProgression([1,2,3,4,5,6])); //true
console.log(isArithmeticProgression([2,4,6,12,24])); //false
console.log(isArithmeticProgression([2,4,6,8])); //true
console.log(isArithmeticProgression([2,6,18,54])); //false
console.log(isArithmeticProgression([1,2,3,4,7,9])); //false
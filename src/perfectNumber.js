//Question3
function findPerfectNumber(number) {
    for (let i = 1; i < number; i++) {
        let total = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total += j
            }
        }
        if (total == i) {

            console.log(i + " is the perfect number")
        }
    }
}
findPerfectNumber(30)
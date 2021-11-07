//Question1
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let counter = 0;
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
          counter++;
          break; 
        }
      }
      if (counter == 0) {
        console.log(numbers[i] + " is a prime number")
      } else {
        console.log(numbers[i] + " not prime!")
      }
    }
  }
  findPrime(6, 128, 2, 45, 23, 5, 11, 15)
  
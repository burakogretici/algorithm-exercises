//Question4
function findPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
      let counter = 0;
      //console.log(i)
      for (let j = 2; j < i; j++) {
      //console.log(j)
        if (i % j == 0) {
          counter++;
          break;
        }
      }
      if (counter == 0) {
        console.log(i + " is a prime number")
      } 
    }
  }
  findPrimeNumber(1000)
function  findFriendNumber(number1,number2){
let totalNumber1 = 0
let totalNumber2=0
  
    for (let i = 0; i < number1; i++) {
    if (number1 % i == 0)  {
        totalNumber1+=i
    }
}

    for (let j = 0; j < number2; j++) {
        if (number2 % j == 0)  {
            totalNumber2+=j 

      }
    }

if (totalNumber1 == number2 && totalNumber2 == number1) {
    console.log(number1 + " and " + number2 + " friends are numbers ")
} else {
    console.log("friends are not numbers")
    
}
}
findFriendNumber(220,284)
findFriendNumber(66928, 66992)
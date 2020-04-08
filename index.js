function createCheckDigit(membershipId) {
    let array = membershipId.split('')
    let sum = 0;
    array.forEach(number => {
        sum += parseInt(number)
    });
    if(sum.toString().length > 1){
        let second = sum.toString().split('')
        sum = 0
        second.forEach(number => {
            sum += parseInt(number)
        });
    }
    return sum;   
  }
  
console.log(createCheckDigit("123"));
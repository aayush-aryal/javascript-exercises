const sumAll = function(number1,number2) {
    if (Number.isInteger(number1)==true && Number.isInteger(number2)==true && (number1>=0 && number2>=0)) {
        let sum=0;
        largest=Math.max(number1,number2);
        for (let i=0; i<=largest;i++) {
            sum+=i

        }
        return sum
    } else {
        return 'ERROR'
    }
}

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(random_string,input_number) {
    if (input_number>=0) {
        let repeated=''
        let number=input_number
        strin=random_string.toString();
        for (let j=0; j<number ; j++) {
            repeated+=strin
        }
    return repeated;    
    }else {
        return 'ERROR'
    }   


}

// Do not edit below this line
module.exports = repeatString;

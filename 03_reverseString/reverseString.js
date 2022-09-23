const reverseString = function(user_string) {
    let conv= user_string.toString();
    let reversed='';
    conv_array= conv.split('')
    for(let i=conv_array.length-1; i>-1; i--) {
        reversed+=conv_array[i];

    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;

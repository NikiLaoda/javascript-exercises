const reverseString = function(string) {
    let newString = [];
    for (let i = 0; i <= string.length; i++) newString[i] = string.at(string.length - i);
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;

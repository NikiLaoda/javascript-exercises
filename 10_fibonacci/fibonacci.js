const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    else {
        let array = [0, 1];
        for (let i = 1; i <= 1000; i++) array.push(array[i] + array[i - 1]);
        return array[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;

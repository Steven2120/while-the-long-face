function numberDoubler(num) {
    while (num <= 100) {
        num = num * 2;
    }
    return num;
}

function stringRepeater(str) {
   let longStr = "";
   while (longStr.length < 10) {
       longStr += str;
   }
   return longStr;
}

function makeDivisible(x, y) {
    let num1 = 0;
    let num2 = y;
    while (num1 % num2 !== 0) {
        num1++;
    }
    return num1;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};
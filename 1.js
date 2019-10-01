function double_factorial(n) {
    if (Number.isInteger(n/2)){
        return n ? n * double_factorial(n - 2) : 1;
    } else {
        return (n != 1) ? n * double_factorial(n - 2) : 1;
    }
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

let string = '90!!*10!!';
let stringArr = string.split("*");
let factArr = [];
/*
function countFact(n) {
    const a = parseInt(n);
    const b = a.toString();
    return ((n.length - b.length)==1) ? factorial(a):double_factorial(a);
}
 */

let res = 1;
for (i = 0; i<stringArr.length; i++) {
    const a = parseInt(stringArr[i]);
    const b = a.toString();
    const fact=((stringArr[i].length - b.length)==1) ? BigInt(factorial(a)):BigInt(double_factorial(a));

    console.log(fact);
    factArr.push(fact);
}
console.log(factArr);
let zeros = 0;
/*
let EndOfStringZeros='';
for (i=0; i<factArr.length; i++) {
    EndOfStringZeros=/0+$/.exec(factArr[i]);
    zeros+=EndOfStringZeros ? EndOfStringZeros[0].length:0;
    console.log(EndOfStringZeros);
    console.log(zeros);
    /*
    console.log(Number.isInteger(factArr[i]/10));
    if (Number.isInteger(factArr[i]/10)) {
        while (Number.isInteger(factArr[i])) {
            factArr[i] = factArr[i] / 10;
            if (Number.isInteger(factArr[i])) {
                zeros++;//обернуть в if
            }
            console.log(zeros);
            console.log(factArr[i]);
        }
}*/
//console.log(EndOfStringZeros[0].length);


//console.log(zeros);

const zeroesAtTheEnd = /0+$/.exec(factArr.reduce((a, b) => BigInt(a) * BigInt(b)));
// console.log(BigInt(a));
//console.log(BigInt(b));
console.log(zeroesAtTheEnd);
console.log(zeroesAtTheEnd ? zeroesAtTheEnd[0].length : 0);


    function zeros0(expression) {
        const splittedExpression = expression.split('*');

        const result = splittedExpression.map((item) => {
            let sum = BigInt(1);
            const number = +item.replace(/\!/g, '');

            const isDoubleFactorial = item.includes('!!');
            const isEven = number % 2 === 0;

            for (let i = (isDoubleFactorial && isEven) ? 2 : 1; i <= number; isDoubleFactorial ? i += 2 : i++) {
                sum = BigInt(sum) * BigInt(i);
                console.log(sum);
            }

            return sum;
        });

        const zeroesAtTheEnd = /0+$/.exec(result.reduce((a, b) => BigInt(a) * BigInt(b)));
        // console.log(BigInt(a));
        //console.log(BigInt(b));
        console.log(zeroesAtTheEnd);
        return zeroesAtTheEnd ? zeroesAtTheEnd[0].length : 0;
    }

    console.log(zeros0('90!!*10!!'));



module.exports = function zeros(expression) {

    let fives = 0;
    let twos = 0;
    let decr = 1;
    let stringArr = expression.split("*");
    let divNum=0;
    for (i = 0; i<stringArr.length; i++) {
        const a = parseInt(stringArr[i]);
        const b = a.toString();
        decr = ((stringArr[i].length - b.length)===1) ? 1:2;
        console.log(a);
        //console.log(decr);
        for (let y=a; y>0; ) {
            let divNum=0;
            if (y%2===0) {
                twos++;
            }
            if (y%5===0) {
                divNum=y;
                while (divNum%5===0){
                    divNum=divNum/5;
                    fives++;
                }
            }
            y-=decr;
        }
    }
    return (fives<twos) ? fives:twos;

}

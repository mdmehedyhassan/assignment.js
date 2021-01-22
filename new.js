function hotelCost(day) {
    var ammountOfTaka = 0;
    if (day <= 10) {
        ammountOfTaka = day * 100;
    }
    else if (day <= 20) {
        var firstCost = 10 * 100;
        var remaining = day - 10;
        var secondCost = remaining * 80;
        ammountOfTaka = firstCost + secondCost;
    }
    else {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remaining = day - 20;
        var thirdCost = remaining * 50;
        ammountOfTaka = firstCost + secondCost + thirdCost;
    }
    return ammountOfTaka;
}
var totalTaka = hotelCost(24);
console.log(totalTaka);
































































function ammountOfTakaCalculator(day) {
    var ammountOfTaka = 0;
    if (day <= 10) {
        ammountOfTaka = day * 50;
    }
    else if (day <= 20) {
        var firstCost = 10 * 50;
        var remaining = day - 10;
        var secondCost = remaining * 100;
        ammountOfTaka = firstCost + secondCost;
    }
    else {
        var firstCost = 10 * 50;
        var secondCost = 10 * 100;
        var remaining = day - 20;
        var thirdCost = remaining * 300;
        ammountOfTaka = firstCost + secondCost + thirdCost;
    }
    return ammountOfTaka;
}
var count = ammountOfTakaCalculator(22);
console.log(count);



























































// // 5! = 1*2*3*4*5
// function factorial(num){
//     var fact = 1;
//     for(var i = 1; i<= num; i++){
//         fact = fact * i;
//         //console.log(i, fact)
//     }
//     return fact;
// }
// var result = factorial(5);
// console.log('result', result);


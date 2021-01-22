
// 1st Problem 
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(75);
console.log(result, "meter")

// 3rd Problem 
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
var totalTaka = hotelCost(60);
console.log(totalTaka);

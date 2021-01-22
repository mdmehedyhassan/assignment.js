// https://github.com/mdmehedyhassan/assignment.js

// function kilometerToMeter(kilometer) {
//     if (kilometer >= 0) {
//         var meter = kilometer * 1000;
//     } else if (kilometer = " ") {
//         var meter = "Sorry you did not enter the correct number."
//     } else {
//         var meter = "Sorry you did not enter the correct number."
//     }
//     return meter;
// }
// var result = kilometerToMeter('l');
// console.log(result)

// // 1st Problem 
// function kilometerToMeter(kilometer){
//     if(kilometer >0){
//         var meter = kilometer*1000;
//     }
//     else{
//         var meter = "Sorry you didn't write the number correctly"
//     }
//     return meter;
// }
// var result = kilometerToMeter(75);
// console.log(result)



// 2nd Problem 
function budgetCalculator(byeWatchPhoneLaptop) {
    if (byeWatchPhoneLaptop < 0 ){
        var byeAll = "Sorry you didn't write the number correctly"
    }
    else {
        var watchPrice = byeWatchPhoneLaptop[0] * 50;    // watch = 50tk
        var phonePrice = byeWatchPhoneLaptop[1] * 100;   // phone = 100tk
        var laptopPrice = byeWatchPhoneLaptop[2] * 500;  // leptop = 500tk
        byeAll = watchPrice + phonePrice + laptopPrice;
    }
    return byeAll;
}
var byeWatchPhoneLaptop = [-21, -15, 18]   // watch, phone, leptop
var totalCost = budgetCalculator(byeWatchPhoneLaptop);
console.log(totalCost);




// // 3rd Problem 
// function hotelCost(day) {
//     var ammountOfTaka = 0;
//     if (day <0){
//         ammountOfTaka = "Sorry you didn't write the number correctly"
//     }
//     else if (day <= 10) {
//         ammountOfTaka = day * 100;
//     }
//     else if (day <= 20) {
//         var firstCost = 10 * 100;
//         var remaining = day - 10;
//         var secondCost = remaining * 80;
//         ammountOfTaka = firstCost + secondCost;
//     }
//     else {
//         var firstCost = 10 * 100;
//         var secondCost = 10 * 80;
//         var remaining = day - 20;
//         var thirdCost = remaining * 50;
//         ammountOfTaka = firstCost + secondCost + thirdCost;
//     }
//     return ammountOfTaka;
// }
// var totalTaka = hotelCost(60);
// console.log(totalTaka);



// 4th Problem
function megaFriend(friends) {
    var largeWord = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > largeWord.length) {
            largeWord = element;
            return largeWord;
        }
    }
}
var friends = ['Mehedy', 'Hassan', 'Eaysin', 'Rohiz', 'Salauddin', 'Sakib', 'Rokib'];
var result = megaFriend(friends)
console.log(result);






































































































// function getArraySum(numbers){
//     var sum = 0;
//     for(var i =0; i <numbers.length; i++){
//         var element = numbers[i] ;
//         sum = sum + element;
//     }
//     return sum;
// }                           /* এই পর্যন্ত লেখে রাখলে তাহলে বার বার কল করা যাবে নিচে দুই নিয়মে দেখানো হলো */
// var numbers = [45, 65, 78, 12, 3, 54, 65];   /* প্রথমে নাম্বার দিয়ে পরে আবার নাম্বার গুলাকে পরের বারে নিয়া লাস্টে কনসল করতে হবে */
// var result = getArraySum(numbers);
// console.log("total of the numbers: ", result);
















































// function megaFriend(friends) {
//     var largeWord = friends[0];
//     for (var i = 0; i < friends.length; i++) {
//         var element = friends[i];
//         if (element.length > largeWord.length) {
//             largeWord = element;
//             return largeWord;
//         }
//     }
// }    
// var friends = ['Mehedy', 'Hassan', 'Eaysin', 'Rohiz', 'Salauddin', 'Sakib', 'Rokib'];
// var result = megaFriend(friends)
// console.log(result);


// var friends = ['love', 'fghow', 'mehedy', 'loverebouy', 'hate'];
// var largeWord = friends[0];
// for(var i = 0; i < friends.length; i++){ 
//     var element = friends[i]; 
//     if(element.length > largeWord.length){ 
//         largeWord = element;  
//     }
// }
// console.log( largeWord); 

















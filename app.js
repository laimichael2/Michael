//1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);

//1.b Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(20);
console.log(ages[ages.length - 1] - ages[0]);

//1.c Use a loop to iterate through the array and calculate the average age. 

let sum = 0;
for (let i = 0; i < ages.length; i++){
    sum += ages[i];
}
console.log(sum / ages.length);

// 2.Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let sum2 = 0;
for (let i = 0; i < names.length; i++){
    sum2 += names[i].length;
   }  
console.log(sum2 / names.length);

// 2.b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let i = names
for (let i = 0; i < names.length; i++){   
}   
console.log([i]);
// 3. How do you access the last element of any array? If the array was name colors. I would access the last element by console.log(colors[colors.length-1]);
// 4. How do you access the first element of any array? If the array was name colors. i would access the first element by console.log(colors[0]);

// 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths =[];
for (let i = 0; i < names.length; i++){ 
nameLengths += names[i].length;
}
console.log([nameLengths]);
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let sum3 = 0;
for (let i = 0; i < nameLengths.length; i++){
   sum3 += nameLengths[i];
}
console.log(sum3);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass
// in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function introduction(word,n){
    return word.repeat(n);
}
console.log(introduction("Hello", 3));
// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.
function fullName(firstName,lastName){
    console.log(firstName + " " + lastName);
}
fullName("Michael", "Lai");

// 9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(array){
    let sum4 = 0
    for (let i = 0; i < array.length; i++){
      sum4 += array[i];
 }
console.log(sum4 > 100);
}
sumGreaterThan100([100, 25]);

// 10.Write a function that takes an array of numbers and returns the average of all the elements in the array.

function findAverage(array){
    let average = 0;
    for (let i = 0; i < array.length; i++){
        let currentNum = array[i]
        average += currentNum;
    }
    average = average / array.length
    return average; 
}
console.log(findAverage([2, 8, 14]));

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater 
// than the average of the elements in the second array.
let isFirstGreater = (array1,array2) => {
    let add1 = 0;
    let add2 = 0;
    for(let value1 of array1) {
        add1 += value1;
    }
    for(let value2 of array2) {
        add2 += value2;
    }
    let average1 = add1 / array1.length;
    let average2 = add2 / array2.length;
console.log(average1 > average2)}
isFirstGreater([2, 100, 6, 1], [9, 11, 4, 1]);

/// 12.Write a functioned willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
///and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
if(isHotOutside == "hot" && moneyInPocket > 10.50){
return true
}}
console.log(willBuyDrink("hot", 10.60));

// 13. Create a function of your own that solves a problem. 
// This function was created so i can see if i can afford to go to my dream vacation to Japan this year and if I have enough vacation
// days from work. The budget I created for myself includes more than 1000 dollars and atleast 7 PTO vacation days available. 
function iNeedVacation(money, vacationDays){
    if (money > 1000 && vacationDays >= 7) { 
        console.log("I can go to vacation!"); 
    } else { 
        console.log("Sorry, you can't go to vacation this year!")
    }}
iNeedVacation(1000,10);
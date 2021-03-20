function enterNumber(){
    let number = Number(prompt("What is the number?"));
    return number;
}
function enter2Numbers(){
    let num1 = Number(prompt("First number in the operation please: "));
    let num2 = Number(prompt("Second number in the operation please: "));
    return [num1, num2];
}
function enterString(){
    let string = prompt("What is your name?");
    return string;
}
function enter2Strings(){
    let str1 = prompt("What is your name?");
    let str2 = prompt("What is your favorite math topic?");
    return [str1, str2];
}

function add23(number = 0){
    console.log(number+23);
}
function subtract77(number = 0){
    console.log(number-77);
}
function multiply2(number = 0){
    console.log(number*2);
}
function divide3(number = 0){
    console.log(number/3);
}
function greeting1(string){
    console.log(`Hello ${string} I love doing math problems :)`);
}
function add(a){
    console.log(a[0]+a[1]);
}
function subtract(a){
    console.log(a[0]-a[1]);
}
function multiply(a){
    console.log(a[0] * a[1]);
}
function divide(a){
    console.log(a[0]/a[1]);
}
function greeting2(a){
    console.log(`Hello ${a[0]}, ${a[1]} is your favorite topic in math!`);
}

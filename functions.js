// Write a function to check if a number is prime.
const prime = (num) =>{
    if (num <= 1) 
        return false;
    if (num <= 3) 
        return true;
    if (num % 2 === 0 || num % 3 === 0) 
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) 
            return false;
    }
    return true;
}
console.log(prime(4));  

//Write a function that returns the factorial of a number.
const factorial =(n)=>{
    if (n === 0 || n === 1) {
        return 1;
    } 
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5))

//Write a function that takes a string and returns it with the first letter of each word capitalized.
const cap =(str)=>{
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(cap("today is saturday"))

//Write a function that takes another function as an argument and runs it after a specified delay.
function hello() {
    console.log("Hi!");
}
function delays(callback, delay) {
    return setTimeout(callback, delay);
}
delays(hello, 2000);

//Write a function that takes an array of numbers and returns a new array with each element doubled, but only if the original element was greater than 10.
function double(arr) {
    return arr.map(num => num > 10 ? num * 2 : num);
}
const array=[1,2,5,7]
const sol = double(array);
console.log(sol);

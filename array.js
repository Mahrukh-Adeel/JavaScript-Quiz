// Write a function to find the maximum element in an array.
const max= ()=>{
    console.log(Math.max(2,5,7,9,11,4));
}
max()

// Write a function to reverse an array without using the built-in reverse method.
let array=[2,5,7,9,11,4]
for (let i=0; i<array.length/2; i++) {
    let l=i, r=array.length-i-1;
    let temp=array[l];
    array[l]=array[r];
    array[r]=temp;
}
console.log(array)

//Use the map method to create a new array that contains the square of each element in the original array.
const square = array.map((array) => array*array)
console.log(square)

//Write a function that uses the filter method to remove all even numbers from an array.
const odd= array.filter((arr)=> {
    return arr%2!=0
})
console.log(odd)

//Use the reduce method to calculate the sum of all elements in an array.
let sum =array.reduce((add, val) => add+val, 0);
console.log(sum)

//Write a function that uses map to extract the names of all users from an array of user objects (each user object contains name and age properties).
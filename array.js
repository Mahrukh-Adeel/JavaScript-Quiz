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
const users = [
    {
        name: "M",
        age: 21
    },
    {
        name: "B",
        age: 31
    },
    {
        name: "C",
        age: 35
    }
]
const names =(array) => {
    return array.map(({ name }) => ({ name }));
};
console.log(names(users));

//Write a function that uses filter to get all the users older than 30 from an array of user objects.
const older = (array) =>(
    array.filter(({ age }) => age > 30)
);
console.log(older(users));

//Use reduce to create an object that contains the counts of each unique element in an array.
let array1= [2,7,2,5,9,2,7]
const count = (array1) => {
    return array1.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {}); 
};
console.log(count(array1))

//Write a function to flatten a nested array using the reduce method.
let array2=[1,[2,3,4],5,[6,7]]
const flat = (array2) => {
    return array2.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flat(item) : item);
    }, []);
};
console.log(flat(array2))

//Use filter and map together to get an array of names of users older than 30 from an array of user objects.
const olders = (array) =>(
    array.filter(({ age }) => age > 30)
    .map(({name})=>({name}))
);
console.log(olders(users));


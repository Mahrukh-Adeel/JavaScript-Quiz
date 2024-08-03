//Write a function to check if a given object is empty.
const obj = {
}
const empty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};
console.log(empty(obj))

//Create an object with property name, age, and occupation, and write a function to print each property and its value.
const person = {
    name: "M",
    age: 21,
    occupation: "Fellow"
}
const print =()=>(
    console.log(`Name: ${person.name}`),
    console.log(`Age: ${person.age}`),
    console.log(`Occupation: ${person.occupation}`)
);
print()

//
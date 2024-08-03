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
const VsUser ={
    name:"M",
    location: "isl",
    loggedIn: false
}
//Write a function to clone an object.
const clone = (person) => {
    return Object.assign({}, person);
};
let cloned=clone(person)
console.log(cloned)

//Write a function to merge two objects.
console.log("Merged")
const merge =(person, obj)=>{
    return Object.assign({},person, obj);
}
let merged= merge(person, VsUser)
console.log(merged)

//Write a function that takes an object and returns an array of its keys.
const keys = (merged) =>{
    return Object.keys(merged);
}
console.log(keys(merged))

//Write a function that takes an object and returns an array of its values.
const values = (merged) =>{
    return Object.values(merged);
}
console.log(values(merged))

//Write a function that takes an object and returns an array of key-value pairs.
const pairs = (merged) =>{
    return Object.entries(merged);
}
console.log(pairs(merged))

// Write a function to deeply merge two nested objects.
const regUser={
    email:"1bc@mail.com",
    fName: {
        fname: "m",
        lname: "a"
    }
}
console.log("Deep Merged")
const deepMerge = (obj1, obj2) => {
    const deep = { ...obj1 }; 
    for (const key of Object.keys(obj2)) {
        if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
            deep[key] = deepMerge(obj1[key], obj2[key]); 
        } else {
            deep[key] = obj2[key]; 
        }
    }
    return deep;
};
let deepM= deepMerge(VsUser, regUser)
console.log(deepM)

//Write a function to update the properties of an object using another object.

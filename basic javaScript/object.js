// Objects হলো JavaScript এর ডাটা স্ট্রাকচার যেখানে আমরা multiple ডাটা স্টোর রাখতে পারে এবং প্রত্যেকটা ডাটার একটা করে নাম দিতে পারি 

// object literal
const student = {
    name: 'pranto',
    age: 20,
}

// insert a data to object
student.hobby = 'web developer'
// console.log(student);

// remove to object properties
delete student.hobby
console.log(student);

// constructor
const student1 = new Object();
student1.name = 'prottoy'
// console.log(student1);

// two way accessing object properties
// 1. dot notation
// console.log(student.name);

// 2. array notation
// console.log(student1['name']);

// আমরা যদি দুইটা অবজেক্ট কে কম্পেয়ার করতে চায় তাহলে সে অবজেক্টকে JSON.stringify(objectName) কনভার্ট করার লাগবে for example:
// console.log(JSON.stringify(student));

// Iterate ( object এর ভিতরে properties আছে কিনা ) (true, false)
// console.log('name' in student);

// object এর সবগুলো key একসাথে পাওয়ার জন্য (for in loop)

for (const key in student) {
    console.log(key + ': ' +student[key]);
}

// objent method
const product = {
    name: 'phone',
    price: 100000,
    bandName: 'i phone'
}

// সবগুলো key একসাথে পাওয়ার জন্য return a array
console.log(Object.keys(product)); 
// সবগুলো value একসাথে পাওয়ার জন্য return a array
console.log(Object.values(product));
// return a two dimensional array
console.log(Object.entries(product));
// new object create and clone
const product1 = Object.assign({}, product)
console.log(product1);


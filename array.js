// আমরা একটা ভেরিয়েবলের ভিতরে অনেকগুলো ডাটা রাখতে পারি সেটা হচ্ছে Array
// array declare
// const numbers = [20, 41, 21, 32, 15, 25, 50, 38];
// console.log(numbers);

// array position (0 থেকে শুরু হয়)
// const arrayPositon = numbers[0];
// console.log(arrayPositon);

// array length
// const arrayLength = numbers.length
// console.log(arrayLength);

// modify to array element
// numbers[2] = 40;
// console.log(numbers);

// Array constructor
// Array()
// console.log(Array());



const numbers = [20, 41, 21, 32, 15, 25, 50, 38];

// প্রত্যেকটা element এর সাথে 2 করে যোগ করো 
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const sum = element + 2
//     console.log(sum);
// }

// array even numbers
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(i, numbers[i]);
//     }
// }

// array total element sum
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);


// ========= insert and remove ==========

// Array method => push(), pop(), shift(), unshift(), splice(), reverse(), join(', '), concat(), isArray(),

// মাঝখানে ডাটা insert => arrayName.splice(indexNumber, removeElement, insert)
// for example :
// const number = [20, 41, 21, 14, 32, 10];
// number.splice(2, 0, 20)
// console.log(number);

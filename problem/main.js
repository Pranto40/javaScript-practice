// 1. এক থেকে ছয় সংখ্যার রেনডমলি প্রিন্ট করা
// const randomly = () => {
//     const randomNumber = Math.round(Math.random() * 6)
//     console.log(randomNumber)
// }

// 2. alphabetical এ সাজাতে পারি 
// const name = ['pranto', 'emarn', 'akash', 'abdul khalek', 'harez']
// console.log(name.sort());

// 3. রোল নাম্বার অনুযায়ী সাজাতে পারি

// const number = [10, 12, -1, 21, 0, 2, 15, -14, 32, 32]
// console.log(number.sort());

// 4. leap year কি না

// const isLeapYear = (year) => {
//     if ((year % 400 === 0 || year % 4 === 0 ) && year % 100 !== 0) {
//         console.log(`${year} is a leap year`);
//     }else{
//         console.log(`${year} is not a leap year`);
//     }
// }
// isLeapYear(1921)

// 5. একটা sentence-এ কতগুলো vowel আছে

// const sentence = 'I am dulal ahammed pranto. I learn JavaScript'
// const toLowerCase = sentence.toLowerCase()
// const vowelCount = (sentence) => {
//     let count = 0
//     const letter = Array.from(sentence)
//     letter.map((value) =>{
//         if (value === 'a' || value === 'e' || value === 'i'|| value === 'o' || value === 'u') {
//             count++
//         }
//     })
//     console.log(count);
// }

// vowelCount(toLowerCase)

// 6. array এর ভিতর duplicate নাম্বার বের করা

// const numbers = [10, 20, 30, 50, 40, 10, 50, 40, 10, 30]
// const duplicate = numbers.filter((value, index, array)=> {
//     return array.indexOf(value) !== index
// })
// console.log(duplicate);

// 6. তিনটি সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যা কোনটি 

// const number1 = 20
// const number2 = 30
// const number3 = 10

// if (number1 > number2) {
//     if(number1 > number3){
//         console.log('number1 is big');
//     }
// }else if (number2 > number1) {
//     if (number2 > number3){
//         console.log('number2 is big');
//     }
// } console.log('number3 is big');


//  7. 1 থেকে 100 এর মধ্যে জোড় সংখ্যা

// const events = []
// for(let i = 1; i <= 100; i++){
//     if (i % 2 === 0) {
//         events.push(i)
//     }
// }
// console.log(events);

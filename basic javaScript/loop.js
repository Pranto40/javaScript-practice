// একই ধরনের কাজ যদি বারবার করা লাগে। তাহলে আমরা loop এর ভিতরে সেটাকে দিয়ে সে কাজটি করতে পারে।

// 1. for loop

// initializer => আমরা কোথা থেকে কাউন্ট করা শুরু করব। একটি ভেরিয়েবল ডিক্লেয়ার করতে হবে
// condition => কতক্ষণ পর্যন্ত চলবে

/*
 for (initializer; condition; increment) {

}
*/

// 1 থেকে 100 মধ্যে ইভেন্ট নাম্বার যোগ করা
// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0) {
//         console.log(`${sum} + ${i} = ${sum + i}`);
//         sum += i;
//     }
// }
// console.log(sum);



// 2. while loop
// প্রথমে যদি condition false হয়ে যায় তাহলে while loop এর ভিতরে আর যাবে না যদি true হয় তাহলে কাজ করবে

// let number = false;
// while (number) {
//     console.log("while loop");
// }

// 3. do while loop

// let isRun = false;
// do {
//     console.log("I learn do while loop");
// }while (isRun)

// ======== nested loop =======

let number = 5;
for (let i = 1; i <= number; i++){
    let result = '';
    for (let j = 1; j < i; j++) {
        result += j + ' '
    }
    console.log(result);
}
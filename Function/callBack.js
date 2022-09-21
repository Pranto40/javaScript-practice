// আমরা ফাংশন এর মধ্যে আর্গুমেন্ট হিসাবে আস্ত একটি ফাংশন ব্যবহার করতে পারি এবং সেই ফাংশানের যেকোনো জায়গায় কল করে দিতে পারি

// function add (num1, num2, message) {
//     message()
//     console.log(num1 + num2);
// }

// add(20, 30, function () {
//     console.log('your result');
// })

function add (a, b, callBack) {
    let c = a + b
    let d = a - b
    let result = callBack(c, d)
    return result
}

console.log(add(20, 10, function (c, d) {
    return c - d
})); 
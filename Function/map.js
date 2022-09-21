// map মেথড এর ভিতরে আমরা একটি callBack ফাংশন পাবো সেই ফাংশনের প্যারামিটার হিসেবে আমরা তিনটি জিনিস পাবো value, index, সম্পর্ণ Array পাবো এবং নতুন একটা array return করবে 

const numbers = [10, 12, 13, 51, 42, 20, 30]

const dabol = numbers.map(function (value, index, array) {
    const result = value + 2
    return result
})
console.log(numbers);
console.log(dabol);

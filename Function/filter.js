// filter মেথড এর ভিতরে আমরা একটি callBack ফাংশন পাবো সেই ফাংশনের প্যারামিটার হিসেবে আমরা তিনটি জিনিস পাবো value, index, সম্পর্ণ Array পাবো এবং নতুন একটা array return করবে এবং সেটা condition অনুযায়ী কাজ করে 

const numbers = [10, 12, 13, 51, 42, 20, 30]
const filterArray = numbers.filter(function (value) {
    return value % 2 === 0
})
console.log(filterArray);
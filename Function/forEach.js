// forEach মেথড এর ভিতরে আমরা একটি callBack ফাংশন পাবো সেই ফাংশনের প্যারামিটার হিসেবে আমরা তিনটি জিনিস পাবো value, index, সম্পর্ণ Array পাবো 

const numbers = [10, 12, 13, 51, 42, 20, 30]
numbers.forEach(function (value, index, array) {
    // console.log(value);
    // console.log(index);
    // console.log(array);
    const result = value + 2
    console.log(result);
})

// কোন একটা কাজ কে ফাংশন এর মাধ্যমে বারবার করাকে recursive ফাংশন বলা হয় এবং সে নিজে নিজেই কল করবে

function printTenTime (number) {
    if (number === 0) {
        return
    }
    console.log('print ten time consol.log');
    printTenTime (number - 1)
}

printTenTime(10)

const numbers = [10, 21, 12, 32, 10, 21, 25, 14, 100];

function sum (numbers, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return numbers[lastIndex] + sum(numbers, lastIndex - 1)
}

console.log(sum(numbers, numbers.length - 1));



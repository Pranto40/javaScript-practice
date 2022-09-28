// OOP => object oriented programming

// যাকে বর্ণনা করার জন্য multiple properties লাগবে সে একটা object 
// আমরা একটা object এর ভিতরে যেগুলো variable হিসেবে রাখি সেগুলো হচ্ছে প্রপার্টিস আর যেগুলো object এর ভিতর যে কোন কাজ করে সেগুলো হচ্ছে methods। methods আর function একই function যেকোনো জায়গায় ব্যবহার করতে পারি কিন্তু methods যেকোনো জায়গায় ব্যবহার করতে পারি না। object.functionName লিখতে হবে

// আমরা যদি কোন object এর ভিতরে কোনো object property ব্যবহার করা লাগে তাহলে this keyword ব্যবহার করবো 


const rectangle = {
    width: 100,
    height: 50,
    draw: function () {
        console.log('I am a rectangle');
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}

rectangle.draw()
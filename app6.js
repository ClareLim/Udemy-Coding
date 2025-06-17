
// allowed function expression after
myFun2();
myFun2();


// you need to declare code with const BEFORE you can invoke it
const myFun1 = function(){
    console.log("Fun 1");
}

// invoke the code to run
myFun1();
myFun1();
myFun1();

const myFun3 = function(){
    console.log("Fun 3");
    return '3';
}();
console.log(myFun3);

function myFun2(){
    console.log("Fun 2");
}

myFun2();
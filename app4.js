const myArr = ['string',100,true];
// console.log(myArr);
// console.log(myArr[0]);

// can assign new stuff in myArr
myArr[0] = "New Value";

// console.log(typeof myArr);
// console.log(typeof myArr[0]);

// no order in this object
const myObj = {
    first:'string', 
    val: 100,
    boo: true,
}

console.log(myObj);
console.log(typeof myObj);



// return back associated value of boo
console.log(myObj['boo']);

// can update the value of the Object as JS is not tied to specific datatype
myObj['boo'] = 'New Value';

// use dot notation to access associated item of object
console.log(myObj.boo);

// if we assign a new data value to My Object variable, use let instead of const

// can group related items together with const given array format

// name and value pair tgt create property
const myName = {
    firstName : "Clare",
    lastName : "Lim",
    age: 20,
    gender: "Female",
    arr: [1,2,3,4,5],
    myObj: {
        first : 'string', 
        val : 100,
        boo : true,
    }
}
// using bracket notation to access the value
console.log(console.log(myName.myObj.val));

// using dot notation to access the value needs the quotes around property names
console.log(myName['myObj']['first']);

const myArr2 = myArr;
myArr2[2] = "wow";
console.log(myArr);
console.log(myArr2);

const myObj2 = myObj;
myObj2.firstName = "ClareMin"
console.log(myObj2);
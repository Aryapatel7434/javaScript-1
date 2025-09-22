//basically in js two type of data type i->Premitive and ii->non premetive
//i-> premitive->String,Number,Boolean,null,undefined,Symbol,BigInt.
//premitive data typre pass by value
const score=100
const scorevalue=100.3

const isloggedin=false
const outsidetemp=null
let usermail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);//Symbol represent uniq so ans is false

//const bignumber=1333432432432423424n //n is consider ans a bigint

//Non premitive data type

//Non premitive data type is pass by referance

//Array,function,object

const heros=["Banko 1","Banko 2","Banko 3"];

let obj={//in carli brasis all are consider as a object
        name:"Arya",
        age:18,
}
const myFunction = function()
{
    console.log("Hello world");
}
console.log(typeof anotherId);


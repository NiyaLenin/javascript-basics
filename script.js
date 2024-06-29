console.log("hello world");

var a = 10;
console.log(a);

var a ="name"
console.log(a);

const pi = 3.14;
console.log(pi);

var numbers = [1, 2, 3, 4, 5];
var newNumber = [...numbers,6,7,8];
console.log(newNumber);

let valueone=2;
let valuetwo= "a";
console.log(valueone+valuetwo);

console.log(valueone+parseInt(valuetwo));

const name = "john";
const age=30;
const rating = 4.5;
const iscool=true;
const k=null;

console.log(typeof name);
console.log("my name is" + name +"and i am "+age);

let x = 5;
let y = 2;
let z = x + y;
console.log("sum " + z);

let value = 16;
if(value>=18){
    console.log("you are adult");

}
else{
    console.log("you are a minor");
}

console.log("function");

function showString(){
    console.log("Hello world")
}  

showString();

var showString=function()
{
    console.log("Hello world")
}
showString();

var showString = () => {
    console.log("arrow function hello world");
}
hello = () => {
    return "Hello World!";
  }

showString();

var number = [1,2,3,4,5];
var square=number.map((num)=>{
return num*num;
})
console.log(square);


// ──→ Hello to js in 3 diff ways
console.log('hello Javascript');
console.warn('hello Javascript')
console.error('hello Javascript')

                                       
// ──→ Make table and do operations
console.table({name:"sanket" , age: 23});
console.log(35*2 - (10/2) + 7);


// ──→ Print different types of datatype using typeof
console.log(typeof 12 )
console.log(typeof "12" )
console.log(typeof true )
console.log(typeof null )
console.log(typeof [ ] )


// ──→ Ways to swap 2 number
var a = 12;
var b = 23;
var c;
c = a;
a = b;
b = c;
console.log(a,b);

var d = 22;
var e = 24;
[d,e] = [e,d];
console.log(d,e);


// ──→ Making groups of consoles
console.groupCollapsed("Trip");
    console.log("Visiting jaipur to rishikesh");
    console.log("Rishikesh to jammu");
    console.log("Jammu to loc");
console.groupEnd();


// ──→ Updating Constant Object | Popping out Constant array | Freezing Constant Object
const obj = {
    name: 'harsh',
    dhanda: 'Kapdo ki dukan',
    age: 20
}
obj.age = 24;
console.log(obj.age);
// constant se app value change nhi kr sakte but value ko only update hi kr sakte ho 

const arr = [1 ,2 ,4 ,7 , 8];
console.log(arr.pop());
// pop is used to remove the very last element of an array

const ohj = {
    name: 'bhavishya',
    age: 34,
    email: 'sabselabma@gmail.com'
};
Object.freeze(ohj);
ohj.name = 'bhavya';
console.log(ohj);
// idr maine object.freeze kr diya h aab const ki value update bhi nhi hogi toh ye jo name change karne ka try kiya h ye nhi hoga 


// ──→ Converting String to Number in 3 diff ways
let h = "23"
let num = Number(h);
let num2 = parseInt(h);
let num3 = +h;
console.log(num);
console.log(num2);
console.log(num3);

let o = " 30 is his age"
let num4 = Number(o);
let num5 = parseInt(o);
let num6 = +o;
console.log(num4);
console.log(num5);
console.log(num6);

/* We have 3 different ways to convert a string into a number
!The first one is 'Number':- what it does that it try to forecfully covery everything inside a string into a number so if it find anything that is a non number it will NaN as an out put
Todo: Now the second method is to use '+' it is same as Number but just the shorter variant  
? Third one is "ParseInt" it read the string from left to right and if the first digit in string is number then it will convert that to number and it doesnt matter if the rest of the string is non number if the first digit is no it will extract that no and if the first digit is non number is will give NaN */


// ──→ Finding if script is in Javascript without using includes
let n = "Javascript"
n.indexOf("script") //! Ans will be 4
n.indexOf("scripts") //! Ans will be -1
console.log(n.indexOf("script") !== -1); // isme check karega ki agr value -1 nhi h toh true print karwa do jisse confirm ho jaega ki js me scipt h 
// jab bhi apne indexof use karte h toh wo batata h ki jo word apne dhundna caha rhe h wo kidr se shuru hota h agr wo word apne khi dhundna cahate h toh wo uski position de dega or agr wo usme nhi hua toh console me result -1 aa jaega


let arr2 = [1,2,3,4,5];

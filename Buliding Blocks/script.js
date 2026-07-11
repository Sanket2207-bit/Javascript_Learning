var a = "prince"

console.log(a)

var b = '10'
console.log(b)

// var num1 = prompt('Enter your first number')
// var num2 = prompt('Enter your second number')

// var realnum1 = Number(num1)
// var realnum2 = Number(num2)

// console.log(realnum1 + realnum2);

//! both of upper var are use to write the no in console ans store them in variable format

// console.log(c);
// var c = 43
// console.log(c);
//this above concept is known as hoisting

// var d = Number(prompt('enter no'))
// var e = Number(prompt('enter another no'))

// if(d>e){
//     console.log('d is greater');
// }
// else if(d<e){
//     console.log('e is greater');
// }
// else{
//     console.log('both are equal');
    
// }

// var age = Number(prompt('Enter a number'))
// if (age>=18 && age <=80){   //here '&' is an "and" operator and there is || which is an "or" operator
//     console.log('you are young');
// }
// else{
//     console.log('you are old');
// }

var ek_no=10
console.log(ek_no++) //idr value pahele 10 thi fir apne increase kr di ++ laga kr usse but wo pahele 10 ho chuki h toh aab jab apne firse print karwaenge na ek_no ko toh uski value increase hokr aaegi

console.log(ek_no)

var dusra_no=20
console.log(++dusra_no) //idr value pahele increase ho jayegi fir print hogi 

var l = 10
var jh = '10'
if(l == jh){
    console.log("both are same");
}
else{
    console.log("Not same");
}
// toh idr upr double equals to sirf value ko compare karta h islie iska ans same aaya
var l = 10
var jh = '10'
if(l === jh){
    console.log("both are same");
}
else{
    console.log("Not same");
}


// triple eqauls to value + data type dono ko compare karta h islie iska ans not same aaya


//If a person electricity will is greater than 100 units, then calculate its bill at 10 rupees per unit, and if it's greater than 50 units but less than 100 units calculate it as 8 rupees per unit and if it's less than 50 then calculate it as 5 rupees per unit.

var unit = Number(prompt("Enter the no of units"))

var bill 
if (unit > 100){
    bill = unit*10
}
else if(unit>=50 && unit <=100){
    bill = unit*8
}
else{
    bill = unit*5
}
console.log(bill);


var op = 10
var oq = 20
op>oq ? console.log("op is better"):console.log("op is not better");
//ye jo upr h isse ternery operator bolte h jo ki if else ko short form me karta h 


var kk = 1
while (kk<10){
    console.log("hello",kk)
    kk++
}
// idr loop chalaya h but kk ki value ko increment bhi kia h taki ye infite loop na bane

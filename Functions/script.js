// functions are used to run a specific code later
// ──→ function calling
function hello(){
    console.log("Yo!")
};
// now i have created a function name hello "this is the easiest way to create an function"
hello();
hello();
// hello(); aaise likhne se function call hota h or jitni bar hello (); likhunga utni bar run hoga 
// console m

function enrty_allowed(){
    console.log('you are allowed to view this website')
};
function entry_denied(){
    console.log('you are not allowed to view this website')
};

let age = prompt('what is your age');
if(age > 18){
    enrty_allowed();
}
else{
    entry_denied();
}

function hi(person_name){
    console.log("HI," + person_name + "!");
}
hi("Sanket");
hi("Bobby");


// ──→ Giving Arguments to a Function
function boy(a,b){  //here a and b are parameters 
    console.log(a*b);
}
boy(1,2)  // here 1 and 2 are arguments
// here i gave boy a value of 1,2 and then multiply them so the result will be 2 in the console
function girl(){
    console.log();
}
girl(21,2,3);
//nothing will be print because in girl there is nothing that can take value of 21 2 or 3 so the output will be nothing and also js will not show any error because it will just simply ignore this command from now on.



// ──→ Ways of calling a function

function abcdef(){
 //! function statement
};

var qwer = function(){
//! function expression
};

 //! function (){}
    //anonymous function ( aaisa function jiske pass koi nam na ho)




// ──→ Fat Arrow Function
()=>{
  //! Here () this is fat => this is arrow hence combine this is called fat arrow ()=> function
}



// ──→ Fat arrow function with one paramter
let abcd = (a)=>{ 
    console.log(a)
    }
abcd(12);


function ploi(){
    return prompt('give me a no');
} 

var lulu = ploi();
console.log(lulu);


//! agr apne function ke andr return print karte h toh zidr se function call hua tha uski value ko jo return me value h usse change kr dete h 



// ──→ Fat arrow function with implicit return
var puish  = () => 12;

var hehhe = puish();
console.log(hehhe)


// ──→ Rest Parameters
function hshw (h ,s , p , w ,... baki){
    console.log(h , s ,p , w , baki)
};
hshw(1 ,2 ,3 , 4 ,5 ,6 ,7 ,8 ,23 ,43 ,4444 , 532);
// idr jo bache gye h like 5 se wo ek array me save ho jaenge kyuki apne dot dot lagaya h na toh js usse apne app array me save kr lega console m


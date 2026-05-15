// ──→ iife - immediately invoked function expression
(function abcd(){
    console.log('hi');
})();
// idr kya ho rha h ki agr apne koi function ko immediately chalana h bina usse bad me call kie toh apne us function ko paranthesis me dal dete h then jidr function khatam hota h udr isse () ye bracket ki help se chala dete h () ye bracket function ko immediately call karne ke lie kam me aata h 
// and apne koi private variable bhi bana sakte jo function ke bahar nhi chalega 

//? example of a iife 
var sanket = (function sanket_function(){
    return{
        hey_sanket: function(){
            var a = 23
            var b = 24
            console.log(a+b);
        },
        hey_manan: function(){
            console.log('hi guys');
        },
    };
})();
sanket.hey_sanket();

// ──→ Higher order function
function abc(){
    console.log('hi bro');
    return function (){
        console.log(" what's up my boy");
    };
};
abc()();
// ek aaisa function jo ya toh return kare function ko ya fir accept kare as a paramter ya fir dono kare

function jkl(higuys){
    higuys();
};
jkl(function(){
    console.log('yoyoyoyo');
});


// ──→ Callback function
function dfg(val){
    val();
};
dfg(function(){

});
// idr jab apne dfg ko call karte time function likhte h iske andr fir uski value jo apne val banaya h usme jati h toh ye jo jane wala process h usse bolte h callback function and jab val me value store ho jati h usse bolte h higher order function


// ──→ First class function
// in java script function are treated as first class it means
//? A first-class function means functions are treated like any other value (strings, numbers, objects, etc.). You can:

//? Assign them to variables
//? Pass them as arguments
//? Return them from other functions
//? Store them in data structures

// ──→ Pure function
function uii(a ,b){
    return a+b;
};
console.log(uii(2,3))
// pure function kya karta h ki ye koi bhi external value ko change nhi karta like a and b function ke andr create hue the or ye koi bhi bahar wali value ko change nhi kr rhe h toh aaise function ko pure function bolte h 


// ──→ Impure Function
let toal = 0;
function qwe(a){
    toal += a;
};
qwe(9);
console.log(toal);
// impure function wo hota h jo apni function se bahar ki value ko change kr deta h jaise idr hamne toal ki value ko 0 se 9 kr diya


// ──→ Global variable example
var akl = 12;
// agr hamara code {} in bracket ke andr nhi h toh us code ko bolte h global scope
// and global scope ka matlab apne isse khi pr bhi access kr sakte h 

// ──→ Local function example
function bmw(){
    var w = 12;
}
// idr ye jo function h "w" apne isse jo function bmw banaya h iske alwa khi or use nhi kr skate toh ye ho gya local function


function tyu(){
    var l = 23;
    return function (){
        console.log(l);
    }
}
var qds = tyu();
qds();
// callback = ye hota h ki jab apne koi function me dusra function pass karte h
function sim(ab){
    console.log(ab);
}
sim(function(){})

// higher order function = ye hota h jab apne koi function me function pass karte h ya fir koi function return karte h 
function aba(hj){
    return function(){}
}
aba()()

// closure = ye hota h jab koi function me return function usi function ke parent variable ko use karta h 
function qwe(ub){
    var a = 10
    return function(){
        console.log(a)
    }
}
qwe()()

//Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
function hello(sss){
    setTimeout(sss , 10000)
}
hello(function(){
    console.log(2)
})

//Implement your own version of '.map()' as a higher-order function.
var arr = [0,2,1,3,5,199,1]
function maps(a , fnc){
    var arm = []
    for(var i = 0; i<a.length; i++){
        arm.push(fnc(a[i]))
    }
    return arm;
}
var hajua = maps(arr , function(value){
    return value*2
})
console.log(hajua)

//Write a function that uses closures to create a counter.
function closuresawal(){
    var a = 0;
    return function(){
        a++;
        return a;
    };
};
var cancel = closuresawal();
console.log(cancel()) //1
console.log(cancel()) //2
console.log(cancel()) //3

// Implement a function that limits how many times another function can be called (Closure + HOF)
function limit(fn , no_of_times){
    var a = 0;
    return function(){
        if(a<no_of_times){
            a++;
            fn();
        }
    };
}
var limitless = limit(function(){
    console.log("helo guys");
} , 4);
limitless()
limitless()
limitless()
limitless()
limitless()
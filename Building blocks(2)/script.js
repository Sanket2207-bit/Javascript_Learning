//! console koi bhi name create kia ho toh usse print karwane ke lie direct console me wo nam bhi likh sakte h fir jo bhi apne uske aage nam dia value di h ya kuch h wo direct print ho jaega but ye mannual work h automatic nhi h

let str = "apple";
let vin = str.slice(0 , 4);
//! write "vin" to get ans in the console
// idr upr value appl tak hi print hogi or jo first element h wo 0th place pr mana jata h and jo value jani hoti h wo jo second no dia hota h usse ek kam tak hi jata h toh apple ka ans hoga appl
// slice = function hota h ek jo specific portion ko extract karne me kam aata h aaray ya string me se


// `` ye jo sign h isse template lateral bolte h ye basically apne koi string kuch bhi banaya toh usme hi calculation karne ke kam aata h 
var hug = `my name is sanket and my phone no is ${7877100257+429492249}`;
// idr dollar ka sign + curly brackets lagane imp h calculations ke lie


var guh = "Sanket bhai kaisa h";
var fdg = guh.split('k');
// split function me apne jo bhi character dalte h usse jo bhi sentence usse link h usme wo us word se tod deta h eg , "sanket bhai hi" agr idr split me k h toh console me output hoga 'san','et bhai hi'


var hi = "Hello Brother";
var helo = hi.replaceAll('e','o');
// replace funtion sirf jo first variable aata h usse hi "replace" karta h string m but "replaceAll" sare variable ko change kr deta h 


var hey = "helo brother how are hou";
var hola = hey.includes('helo');
// include kya karta h ye koi bhi string h usme check karta h ki ye specifc word h ya nhi or wo word apne batate h include ko or agr wo word hoga toh console me hoga true warna hoga false

switch(7){
    case 1:
        console.log('hello')
        break;
    case 2:
        console.log('hi')
        break;
    case 3:
        console.log('yo!')
        break;
    case 4:
        console.log('byy')
        break;
    case 5:
        console.log('qwerty')
        break;
    default:
        console.log('asdfg')
        break;
}
//If we didn't use break, then the command next to the case will also run. Like if the 4 is in the switch, then the case 4 will run and if we didn't use break then case 5 will also run. And as for the default if the value in the switch that does not match any cases, it will run the default one

for ( let i = 2; i<23; i++){
    console.log('hi fellas')
}
//Loop is a straightforward loop because we exactly know how many times it will run.
let arr = [1,2,3,4,5,6,7,8]
for(let i = 0 ; i<arr.length; i++){
    console.log('yo')
}
//The above loop is the dynamic loop because we don't know how many times it will run. here arr.length check the length of array 

i = 20;
do {
    console.log('yo!');
    i++;
}
while (i<23)
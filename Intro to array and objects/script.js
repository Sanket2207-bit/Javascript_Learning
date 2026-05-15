// ──→ Ways to create an Array
// array is a data structure which can store multiple value all at one place
var a = [ 1 ,2 ,3 ,4];
var b = new Array();


// ──→ When to describe which array
var arr = [];
//ye aaray tab array banane ko bola ho

var arr2 = [1,2,3,4,5];
// ye array tab jab ye bola gya ho ki itne no isme dalo

var arr3 = new Array(100);
// ye tab use karte h jab apne ko 100 empty slots banane hote h taki apne futute me unme value store kr pae

 
// ──→ Example of an array
for(var i = 0; i<100; i++){
    arr3[i]=i;
 }

// ──→ Homogenity in Arrow
/*apne chahe toh ek hi aaray me different types of data types bhi dal sakte h 
Homogeanous :- Same type value
but java script me homogeanous nhi hota toh apne array me different types of value shift kr de*/
var arr5 = ["a" , 12];

// ──→ Object
/* OBJ:- ek tarika h key pair value ko hold karne ka
 */
var obj = {
    //!property: value
    name: 'Sanket',
    age: 21,
    Degree: 'Btech',
    isgood: false
}
//! apne obj.namee ya fir obj.age ye karke apne jo bhi object create kara h uske andr ka specific koi bhi value nikal sakte h

/* apne object isliye use karte h jab Apne ko ek hi chiz ke bare me multiple info chaiye ho */
// ──→ Ways to create an object
var obj2 = {};
var obj3 = new Object();

console.log(obj);

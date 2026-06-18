// ──→ Write a for loop to print numbers from 10 to 1 in reverse
for (let i = 10; i>0; i--){
    console.log(i)
}

// ──→  Use a while loop to print multiples of 3 from 3 to 30.
let num = 3;
while (num<=30){
    console.log(num);
    num += 3;
}

// ──→ Write a program to calculate the sum of numbers from 1 to 100 using a loop.
 let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum);

// ──→  Create a nested loop to print a star pattern
for (let i = 1 ; i<=8 ; i++){
    let stars = ""
    for(let j = 1 ; j<=i ; j++){
        stars += "*"
    }
    console.log(stars)
}

// ──→  Use a for...of loop to iterate over the string "JavaScript"
const language = "javascript";
for(const char of language){
    console.log(char);
}

// ──→ Remove duplicate values from an array
var arr = [1,2,2,3,3,4,3,2,5,7,4,5,8,5];
var unarr = [... new Set(arr)];
console.log(unarr);
// ... these 3dots are called spread operator it is used to spread the iterable like string array set etc.
// Set is used to only store unique values

// ──→ Find the largest number in an array
var agh = [1 ,2 , 38 , 98 , 200 , 2 , 4 , 45];
var ahj = [... new Set(agh)];
var largest = ahj[0];
for(var i = 1 ; i < ahj.length ; i++){
    if(ahj[i]>largest){
        largest = ahj[i];
    }
}
console.log(largest);

// ──→ Sort an array in descending order
var aaa = [1,222,3321,32,13,9,31,2,0];
var aas = [... new Set(aaa)];
aas.sort((a,b)=>b-a);
console.log(aas);

// ──→ Find the second largest number in an array
var hhh = [1,2,3,2,3,287,3,4,3,3,2123];
var ggg = [... new Set(hhh)];
ggg.sort((a,b) => b - a);
console.log(ggg[1]);

// ──→ Reversing an Array
var cc =[1 , 2 , 3 , 4 ,5 ,6];
cc.reverse();
console.log(cc);

// ──→ Reversing an Array without using .reverse
var hh = [1,2,1,3,4,5];
var reversed = [];
for ( var i = hh.length-1 ; i>=0; i--){
    reversed.push(hh[i]);
}
console.log(reversed);

// ──→ Find the most frequent element in an array
var x = [1,2,2,1,2,1,2,3,4,3,2,3,4,3,2,3,45,6,4,2,3,4,5,6,4,2,4,5];
var count = {}
var maxcount = 0;
var mostfrequent;
for (var i = 0; i<x.length; i++){
    let num = x[i];
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
    if (count[num] > maxcount) {
        maxcount = count[num];
        mostfrequent = num;
    }
}
console.log(mostfrequent);

var j = [1,2,1,2,3];
var sum2 = 0;
for(i = 1 ; i<j.length ; i++){
    sum2 = sum2 + j[i];
}
console.log(sum2);

var q = [3, 7, 2, 9, 1]
q.sort((a,b)=>b-a);
console.log(q[0])

var h = [1, 2, 3, 4, 5];
var rever = [];
for(var i = h.length-1;i>=0; i--){
    rever.push(h[i]);
}
console.log(rever);

var j = [1, 2, 3, 4, 5, 6, 7, 8 , 0]
var count = 0;
for(var i = 1; i<j.length ; i++){
    if(j[i]%2==0){
        count++
    }
}
console.log(count);

var o = [1, 2, 4, 5, 6]
var count = [1,2,3,4,5,6];


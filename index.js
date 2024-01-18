// In array find even and odd by using forin and forof
let evenarray =[2,4,6,8];
let even =[];
for(even of evenarray){
    if(even %2===0)
    {
        even.push(even)
    }
}
console.log(even);

let oddarray = [1,3,5,7,9];
let odd = [];
for(let odd of oddarray){
    if(odd %2 !=0){
        odd.push(odd)
    }
}
console.log(odd);




//reverse a array
var array = [1,2,3,4,5,6,7,8,9];
console.log(array.reverse());

  


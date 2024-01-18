//print leap year 2000 - 2005 
// console.log("2000-2040 leap year");
let n=2040;
for(i=2000;i<n;i++)
{
    if(i%4===0)
    {
        console.log(i,"this is leap year");
    }
}
console.log("2000-2040 leap year");


//using functions to find leap year
console.log("using functions")
function isLeapYear(){
    let n = 2040;
    for(i=2000;i<n;i++)
    {
        if(i%4===0){
            console.log(i,"leap year");
        }
    }
}
isLeapYear(i)
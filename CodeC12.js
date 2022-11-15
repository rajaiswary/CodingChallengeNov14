const rd = require('readline-sync');
const n = rd.question("Enter array size ~");
const arr = [];
let arr1 = [];
let arr2 = [];
for(var i = 0 ; i<n ; i++)
{
    let nam = rd.question("enter "+(i+1)+" passenger name : ");
    arr.push(nam);
}
for(var j = 0 ; j<n ;j++)
{
    let dest = rd.question("Enter "+(j+1)+" th destination : ");
    arr1.push(dest);
}
arr2 = arr.concat(arr1);
console.log(arr2);

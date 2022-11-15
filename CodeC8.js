const rd = require('readline-sync');
const n = rd.question("Enter array size ~");
const arr = [];
const arr1 = [];
for(var i = 0 ; i<n ; i++)
{
    var num = rd.question("enter "+(i+1)+" fare : ");
    arr.push(parseInt(num));
}
for(var j = 0 ; j<n ;j++)
{
    let dest = rd.question("Enter "+(j+1)+" th destination : ");
    arr1.push(dest);
}
const number = rd.question("Enter a number : ")
if(number<=n)
{
    console.log("Destination :"+arr1[number]+" Flight fare :"+arr[number]);
}
else{
    console.log("The list never exists")
}
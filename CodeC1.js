const rd = require('readline-sync');
const arr = [];
var n = rd.question("Enter the size of the array");
for(var i = 0 ; i<n ; i++)
{
    let nam = rd.question("Enter "+(i+1)+" name : ");
    nam = nam.toUpperCase();
    arr.push(nam);
}
console.log(arr);
for(var i = 0; i<n-1 ; i++)   
{  
       for (var j = i+1; j<n; j++)   
       {  
           if(arr[i].localeCompare(arr[j])>0)   
           {  
                let temp = arr[i];  
                arr[i] = arr[j];  
                arr[j] = temp;  
           }  
        }  
}  
process.stdout.write("Sorted array is \n");
console.log(arr);
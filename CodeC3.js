const rd = require('readline-sync');
const { createModuleResolutionCache } = require('typescript');
const n = rd.question("Enter the size of the array ");
const arr = [];
for(var i = 0; i<n ; i++)
{
    var num = rd.question("Enter "+(i+1)+" element ");
    arr.push(parseFloat(num));
}
for(var i = 0; i<n ; i++)
{
    for(var j = 0; j < (n - i -1 ); j++)
    {
       
      if(arr[j] > arr[j+1])
      {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j+1] = temp;
      }
    }
}
console.log("Sorted array is \n"+arr+" \n");
console.log("max element is :"+arr[n-1]+"\n");
console.log("min element is :"+arr[0])

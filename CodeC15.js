const rd = require('readline-sync');
const n = rd.question("Enter the size ");
const arr1 = [];
const arr2 = [];
for(var i = 0 ; i<n ; i++)
{
    var num = rd.question("Enter "+(i+1)+" weight");
    arr1.push(parseFloat(num));
    arr2.push(parseFloat(num-23));
}
console.log(arr1);
console.log("overweight "+arr2);
for(var i = 0; i<n ; i++)
{
    for(var j = 0; j < (n - i -1 ); j++)
    {
       
      if(arr2[j] < arr2[j+1])
      {
        var temp = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j+1] = temp;
      }
    }
}
console.log(arr2);

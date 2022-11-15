const rd = require('readline-sync');
const { createModuleResolutionCache } = require('typescript');
const n = rd.question("Enter array size ");
const arr = [];
const arr1 = [];
for(var i = 0 ; i<n ; i++)
{
    var num = rd.question("Enter "+(i+1)+" element ");
    arr.push(parseInt(num));
}
console.log(arr);
var o = 1;
var e = 0;
    while (true)
    {
        while (e < n && arr[e] % 2 == 0)
            e += 2;
             
        while (o < n && arr[o] % 2 == 1)
            o += 2;
             
        if (e < n && o < n)
        {
            var temp;
            temp = arr[e];
            arr[e] = arr[o];
            arr[o] = temp;
        }   
        else
            break;
    }
    console.log(arr);
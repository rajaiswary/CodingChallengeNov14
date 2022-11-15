const rd = require('readline-sync');
let nam = rd.question("Enter passenger name :");
const d = rd.question("Enter total miles travelled :");
var p = 0;
if(d>10000)
{
    p += 10;
    console.log(nam+" you are awarded "+d+" points");

}
else if(d>20000)
{
    p += 20;
    console.log(nam+" you are awarded "+d+" points");
}
else if(d>50000)
{
    p += 30;
    console.log(nam+" you are awarded "+d+" points");
}
else if(d>100000)
{
    p += 50;
    console.log(nam+" you are awarded "+d+" points");
}
else
{
    console.log("invalid ")
}
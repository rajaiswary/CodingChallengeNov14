const rd = require('readline-sync');
const y = parseInt(rd.question("Enter your Birth Year\n"));
const m = rd.question("Enter your birth month\n");
const d = rd.question("Enter your date\n");
let l = "";
var age = 2022 - y;
var months = age*12;
var week = age * 52.176;
var days = age*365.25;
var hr = days*24;

if((y%4) == 0)
{
   console.log("leap year")
}
else
{
     console.log("not leap year");
}
console.log(age);
console.log(months);
console.log(week);


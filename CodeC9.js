const rd = require('readline-sync');
const dob = rd.question("Enter DOB in yy,mm,dd format");
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
var age = calculate_age(new Date(dob))

console.log(age);
if(age<10)
{
    console.log("kid")
}
else if(age>10 && age<30)
{
    console.log("Youth")
}
else if(age>30 && age<60)
{
    console.log("Adult")
}
else
{
    console.log("older")
}

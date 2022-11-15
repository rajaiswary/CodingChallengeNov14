const rd = require('readline-sync');
const fare = parseInt(rd.question("Enter a fare "));
var time = rd.question("Enter the time ");
const t = rd.question("Enter 1 for AM\nEnter 2 for PM\n");
if(t == 2)
{
       time += 12;

}

var fareinc = 0;
if(time>6 && time<9 )
{
    fareinc = fare + ((10/100)*fare);
    
}
else if(time>9 && time<17)
{
    fareinc = fare +((20/100)*fare);

}
else if(time>17 && time<13)
{
    fareinc = fare + ((7/100)*fare);
} 
else
{
    fareinc = fare + ((5/100)*fare);

}
console.log("Increased fare is "+fareinc);
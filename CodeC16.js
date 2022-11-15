const rd = require('readline-sync');
const n = rd.question("enter the size of the array : ");
const pass = [];
const seat = [];
const pref = [];
for(var i = 0 ; i<n ; i++)
{
    var p = rd.question("Enter "+(i+1)+" passenger name : ");
    pass.push(p);
    var s = rd.question("Enter "+(i+1)+" seat no : ");
    seat.push(s);
    var pre = rd.question("Type your preference veg or non-veg : ");
    pref.push(pre);
}
for(var i = 0; i<n ; i++)
{
    for(var j = 0; j < (n - i -1 ); j++)
    {
       
      if(seat[j] < seat[j+1])
      {
        var temp = seat[j];
        var t =  pass[j];
        var te = pref[j];
        pass[j] = pass[j + 1];
        seat[j] = seat[j + 1];
        pref[j] = pref[j + 1];
        seat[j+1] = temp;
        pass[j+1] = t;
        pref[j+1] = te;
      }
    }
}
for(var k = 0 ; k<n ; k++ )
{
    console.log("ROW "+(k+1)+" Seat No "+seat[k]+" Passenger Name : "+pass[k]+" Food Preference "+pref[k]+"\n");
}
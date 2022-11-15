const rd = require('readline-sync');
const arr = [];
 while(true)
 {
    var i = 0;
    num = rd.question("Enter "+(i+1)+" element\n");
    process.stdout.write("Press 0 to exit\n");
    arr.push(parseInt(num));
    if(num == 0)
    {
        process.stdout.write("Process terminated");
        process.exit(0);
    }
    i++;
 }
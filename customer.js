const fs = require('fs');
const rd = require('readline-sync');
const path = require('path');
var id;
while(true)
{
    process.stdout.write("1.Add\n2.Delete\n3.Update\n4.Search user\n5.Exit\n");
    const n = rd.question("Enter your choice");
    if(n==1)
    {
        addPassenger()
          
    }
    else if(n==2)
    {
        deletefunc()
    }
    else if(n==3)
    {
           update();
    }
    else if(n==4)
    {
        search();
    }
    else
    {
        process.exit(0)
    }

}
function addPassenger()
{
    id = rd.question("Enter your customer id ");
    var n = rd.question("Enter your name ");
    var a = parseInt(rd.question("Enter your age "));
    var mail = rd.question("Enter your mail id ");
    var pn = rd.question("How many phone numbers ");
    const arr = [];
    for(var i = 0;i<pn;i++)
    {
        var phone = rd.question("Enter "+(i+1)+"st phone numnber ");
        arr.push(parseInt(phone));
    }
    var obj = {
        name:n,
        age:a, 
        email:mail,
        phoneNo : arr
    }
    
    fs.writeFileSync(`${id}.json`,JSON.stringify(obj))
}
function deletefunc()
{
    var userid = rd.question("Enter the user id to delete")
    
    fs.unlinkSync(`${userid}.json`);
    console.log("File deleted succesfully");
}
function update()
{
    // var phonearr = [];
    var userid = rd.question("Enter the user id");
    var filen = `${userid}.json`;
    var usertext = fs.readFileSync(filen,'utf8');
    var user = JSON.parse(usertext);
    process.stdout.write("Enter the details or leave it blank")
    let name = rd.question("Enter your name");
    let email = rd.question("Enter your mail id");
    var age = rd.question("Enter your age");
    let phone = rd.question("Enter your phone no");
    


    user.name = name == "" ? user.name : name;
    user.email = email == "" ? user.email : email;
    user.age = age == "" ? user.age : age;
    user.phone[0] = phone == "" ? user.phone : phone;
    

    fs.writeFileSync(filen, JSON.stringify(user));
    process.stdout.write("Your file has been updated");


}

function search()
{
    let email =  rd.question("Enter your mail id")
    var files = fs.readdirSync(__dirname);


    try {
      
        files.forEach((file)=>{

            var content = JSON.parse(fs.readFileSync(`${file}`))
            console.log(content);
            if(content.email == email)
            {
                console.log(content);
            }
        })
        
        
    } catch (error) {
        

        // console.log(error);
    }

   

    
}
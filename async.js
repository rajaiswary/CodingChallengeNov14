function name(age)
{
    return new Promise((res,rej)=>
    {
        setTimeout(()=>
        {
            if(age <= 18)
            {
                rej("age not valid")
            }
               
            else
            {
                res("meera")
                
            }
        },6000);
    })
}
name(20).then((param)=>{
      console.log(param)
}).catch((qwerty)=>{
    console.log(qwerty)
})
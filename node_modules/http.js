var http = require("http");
http.createServer((req,res)=>
{
    res.writeHead(200,{
        "content-type":"text/plain"
    })
    res.end("hello world")
}).listen(5000,()=>
{
    console.log("server is running on 5000")
})
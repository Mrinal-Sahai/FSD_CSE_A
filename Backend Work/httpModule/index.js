const http=require('http');
const port=2527;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-type',"text/html");
    res.write("<h2 style='color: cyan; background-color: red;'>Welcome to Node Server</h2>");
    res.end("Server has ended");
})
server.listen(port,()=>(
    console.log("server is running on port :"+ port)
));

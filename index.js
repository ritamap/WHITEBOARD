const http= require('http');
const fs= require('fs');

const server = http.createServer((req, res)=>{
    console.log("Got a new request");
    res.write("Hello World");
});

server.listen(3030,'localhost',()=>{
    console.log("server is listening on port 3030");
})
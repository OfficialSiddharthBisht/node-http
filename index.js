const http = require("http");

const server = http.createServer((request, response) =>{
    if(request.url === "/"){
        response.end("Hello");
    }else if(request.url === "/books"){
        response.end("Books Site");
    }else{
        response.end("404 Error , Page Not Found")
    }
    
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to port number 8000");
})
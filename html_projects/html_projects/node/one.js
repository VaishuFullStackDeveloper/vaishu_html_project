const ramu = require('http');

let shamu = ramu.createServer((request,response)=>{
    response.write("<h1>Hello World Nodee & HTML</h1>");
    response.end();
});

const address = "127.0.0.1";
const port = 4000;

shamu.listen(port,address,() =>{
    console.log("Server is running at http://" + address + ":" +port);
});                                                                                    
import http from 'http';

const host = 'localhost';
const port = 8000;

const server = http.createServer((req,res)=>{
  if(req.method === 'POST'){
    let body = '';
    req.on('data',chunk=>{
      body+=chunk;
    });
    req.on('end',()=>{
      console.log(`Request Ended with the content: ${body.toString()}`);
      res.writeHead(201);
      res.end(`Post Call Success!: ${body.toString()}`);
    });
  }else{
    res.writeHead(200)
    res.end('Hello from my teeny tiny Server, this is not a post call');
    console.log('Call other than POST initiated');
  }
});

server.listen(port,host,()=>{
  console.log('Server is up and listening! Start Triggering Network calls');
});
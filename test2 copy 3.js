const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.write('Ambatuwrite');
        res.end();
    }

    if (req.url === '/mema'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})

server.listen(3001);

console.log('Ambatukam');
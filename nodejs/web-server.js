import {createServer} from 'node:http';

function handler(req, res) {
    console.log('Incoming request!!!');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello');
}

const server = createServer(handler);
server.listen(8080);

console.log('web server started http://localhost:8080');

// global error handler
process.on('uncaughtException', e => {
    if (e.toString() === 'Error: XXX') {
        console.log('NOOO, Im dead');
        process.exit(1);
    }
    console.log('An error occurred, but Im not dead!');
});

const http =require('http');
const app =http.createServer((req, res) => {
    if (req.url == '/hello') {
        res.statusCode = 418;
        res.setHeader('X-Custom-Header', 'skillfactory');
        res.write('Hello from server');
        res.end();
    } else if(req.method === 'POST' && req.url === "/data") {
        res.write('I\'ve got your data');
    }
        else {
        res.write('Default resp');
    }
});
app.listen(8000);
app.on('listening', () => {
    console.log('Server is listening on port 8000');
});
const http = require('http');

const port = 1245;
const host = 'localhost'

const app = http.createServer();

app.on('request', (req, res) => {
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode= 200;
    res.write(Buffer.from(responseText));    
});

app.listen(port, host, () => {
    process.stdout.write(`The server listening on port ${port}`)
})

module.exports = app;
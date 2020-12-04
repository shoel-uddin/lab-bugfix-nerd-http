const http = require('http');
const nerds = require('nerds');
const HOST = '0.0.0.0';
const PORT = 9999;

const server = http.createServer((req, res) => {
    const {
        first,
        last,
        house,
        wand
    } = nerds.resolve('Harry Potter').asArray()[0];
    res.end(`
<h1>${first} ${last}</h1>
<h2>${house}</h2>
<ul>
  <li>${wand}</li>
</ul>
`);
});

server.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

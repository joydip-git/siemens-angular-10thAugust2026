const { createServer } = require('http')

const server = createServer((req, res) => {
    res.end('welcome...')
})
server.listen(4000, () => {
    console.log('the server is running using port no: 4000');
})
console.log('welcome to node js')

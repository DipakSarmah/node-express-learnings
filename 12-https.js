const http = require('http')

const server = http.createServer(
    (req, res)=>{//call back function

        if(req.url === '/'){
            res.end('welcome to our home page')//res.write('welcome to our home page');res.end()
        }
        if(req.url === '/about'){
            res.end('this is about the node request and respone methods')
        }
        res.end( `
            <h1>Opps!</h1>
            <p>we can't seem to find the page you are looking for!</p>
            <a href="/">back home</a>
            `
        )
    }
)
server.listen(8000);
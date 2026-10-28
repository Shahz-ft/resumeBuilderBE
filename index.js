const jsonServer = require('json-server') //common js

const server = jsonServer.create() // create a server using json-server

server.use(jsonServer.defaults()) 
//defaults Returns middlewares (parsing stringify,res sharing b/w diff orgins)used by JSON Server.- tells our server to use these middlewares 

const route = jsonServer.router('db.json') // tells the place where the data should be saved

server.use(route)

server.listen(3000,()=>{
    console.log('server is running on portno 3000')
})
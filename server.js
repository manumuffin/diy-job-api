const jsonServer = require('json-server'); //get package
const server = jsonServer.create(); //use it in this file like this (create & invoke)
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
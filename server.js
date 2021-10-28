const jsonServer = require('json-server'); //get package
const server = jsonServer.create(); //use it in this file like this (create & invoke)
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
/*
server.use('db.json', function (req, res) {
        const page = req.query.page;
        const limit = req.query.limit;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};

        if (endIndex < positions.length) {
            results.next = {
                page: page + 1,
                limit: limit
            };
        }

        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            };
        }

        results.results = positions.slice(startIndex, endIndex);
        res.json(results);
    });
*/


server.listen(port);

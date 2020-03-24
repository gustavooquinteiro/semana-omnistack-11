const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) =>{
    const params = request.body;

    console.log(params);

    return response.send("Hello world");
});

module.exports = routes;
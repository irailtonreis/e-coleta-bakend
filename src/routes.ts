import express from 'express';

const routes = express.Router();


routes.get('/users', (request, response)=>{

  response.send("Hello world")
})

export default routes;
import express from 'express';

const app = express();
app.use(express.json())

app.get('/users', (request, response)=>{

  response.send("Hello world")
})

app.listen(3334)
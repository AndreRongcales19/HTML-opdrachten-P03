import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000
app.use(cors());

const message = [];

app.get('/message', (request, response) => {
    message.push({
        name: request.query.name,
        email: request.query.email,
        message: request.query.message
    }); 
    console.log(request.query.name);
    console.log(request.query.email);
    console.log(request.query.message);
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
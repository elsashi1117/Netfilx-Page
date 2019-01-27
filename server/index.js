const express = require('express');

const mongooseConnect = require('./config/key');
mongooseConnect();

const bodyParser = require('body-parser');

const movies = require('./routes/api/movies');

const app = express();

app.use(bodyParser.json());


//use routes
app.use('/api/movies',movies)

  app.listen(8080, ()=> {
    console.log('Listening to the port 8080')
  });
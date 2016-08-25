const express = require('express');
const bodyParser = require('body-parser');
const dataStore = require('./initial.state.js');
const memberRoutes = require('./routes/members.js');
const movieRoutes = require('./routes/movies.js');

const app = express();
app.use(bodyParser.json());

memberRoutes(app, '/api/member', dataStore);
movieRoutes(app, '/api/movie', dataStore);

app.listen(3300, () => {
  console.log('Movie store listening on 3300');
});

const express = require('express');
const bodyParser = require('body-parser');
const dataStore = require('./initial.state.js');
const memberRoutes = require('./routes/members.js');
const movieRoutes = require('./routes/movies.js');

const app = express();
app..use(bodyParser.json());

memberRoutes(app, '/api/member', dataStore);
//movieRoutes(app, dataStore);

app.listen(3000, () => {
  console.log('Movie store listening on 3000');
});

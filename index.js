const express = require('express');
const dataStore = require('./initial.state.js');
const memberRoutes = require('./routes/members.js');
const movieRoutes = require('./routes/movies.js');

const app = express();

memberRoutes(app, '/api/member', dataStore);
//movieRoutes(app, dataStore);

app.listen(3000, () => {
  console.log('Movie store listening on 3000');
});

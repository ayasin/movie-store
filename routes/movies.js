module.exports = (app, path, dataStore) => {
  app.get(`${path}`, (req, res) => {
    res.status(200).json({status: 'ok', movies: dataStore.movies});
  });

  app.get(`${path}/:id`, (req, res) => {
    const idx = req.params.id;
    if (idx < 0 || idx > dataStore.movies.length) {
      return res.status(404).json({status: 'error', error: 'movie not found'});
    }
    res.status(200).json({status: 'ok', movie: dataStore.movies[idx]});
  });

  app.post(`${path}`, (req, res) => {
    dataStore.movies.push(req.body);
    res.status(200).json({status: 'ok'});
  });

  app.put(`${path}/:id`, (req, res) => {
    const idx = req.params.id;
    if (idx < 0 || idx > dataStore.movies.length) {
      return res.status(404).json({status: 'error', error: 'movie not found'});
    }
    dataStore.movies[idx] = req.body;
    res.status(200).json({status: 'ok'});
  });
}

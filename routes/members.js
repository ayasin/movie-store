module.exports = (app, path, dataStore) => {
  app.get(`${path}`, (req, res) => {
    res.status(200).json(dataStore.members);
  });
}

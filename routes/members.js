module.exports = (app, path, dataStore) => {
  app.get(`${path}`, (req, res) => {
    res.status(200).json({status: 'ok', members: dataStore.members});
  });

  app.get(`${path}/:id`, (req, res) => {
    const idx = req.params.id;
    if (idx < 0 || idx > dataStore.members.length) {
      return res.status(404).json({status: 'error', error: 'Member not found'});
    }
    res.status(200).json({status: 'ok', member: dataStore.members[idx]});
  });

  app.post(`${path}`, (req, res) => {
    dataStore.members.push(req.body);
    res.status(200).json({status: 'ok'});
  });

  app.put(`${path}/:id`, (req, res) => {
    const idx = req.params.id;
    if (idx < 0 || idx > dataStore.members.length) {
      return res.status(404).json({status: 'error', error: 'Member not found'});
    }
    dataStore.members[idx] = req.body;
    res.status(200).json({status: 'ok'});
  });
}

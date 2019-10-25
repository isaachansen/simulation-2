module.exports = {
  getHouse: (req, res) => {
    const db = req.app.get("db");
    db.get_house().then(house => {
      res.status(200).send(house);
    });
  },
  addHouse: (req, res) => {
    const { name, address, city, state, zip } = req.body;
    const db = req.app.get("db");
    db.add_house([name, address, city, state, zip]).then(house => {
      res.status(200).send(house);
    });
  },
  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_house(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
};

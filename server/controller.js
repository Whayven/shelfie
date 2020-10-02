module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");

    db.get_inventory()
      .then((inventory) => res.status(200).send(inventory))
      .catch((err) => res.status(500).send(err));
  },
  addItem: (req, res) => {
    const { name, price, img } = req.body;
    const db = req.app.get("db");

    db.add_item({
      name,
      price,
      img
    })
    .then(() => res.status(200).send("Item added successfully!"))
  },
  deleteItem: (req, res) => {
    const {id} = req.params;
    const db = req.app.get('db');

    db.delete_item(id)
    .then(() => res.status(200).send("Item removed successfully!"));
  },
  editItem: (req, res) => {
    const {id} = req.params;
    const { name, price, img } = req.body;
    const db = req.app.get("db");
  }
};

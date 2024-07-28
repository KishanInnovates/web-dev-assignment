const User = require("../models/User");

exports.viewItems = async (req, res) => {
  try {
    // logic to view items (assuming items collection exists)
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.viewItemDetails = async (req, res) => {
  try {
    // logic to view item details
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.addItemInteraction = async (req, res) => {
  try {
    // logic for user interactions (comments/ratings)
    const { itemId, comment, rating } = req.body;
    const interaction = new Interaction({
      item: itemId,
      user: req.user.id,
      comment,
      rating,
    });
    await interaction.save();
    res.json(interaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

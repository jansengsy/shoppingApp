const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const ShoppingListItem = require('../models/ShoppingListItem');

router.get('/', async (req, res) => {
  try {
    const items = await ShoppingListItem.find({});
    res.json(items);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(`Server Error`);
  }
});

router.post(
  '/',
  [check('name', 'Please provide a name').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
      const newItem = new ShoppingListItem({
        name,
      });

      const item = newItem.save();
      res.json({ msg: 'Item added!' });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: 'Server error' });
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    await ShoppingListItem.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Item deleted!' });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

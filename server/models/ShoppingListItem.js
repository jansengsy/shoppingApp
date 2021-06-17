const mongoose = require('mongoose');

const shoppingListItemSchema = new mongoose.Schema({
  name: String,
});

const shoppingListItemModel = mongoose.model(
  'ShoopingListItem',
  shoppingListItemSchema
);

module.exports = shoppingListItemModel;

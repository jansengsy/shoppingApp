import { useState } from 'react';
import List from './List';

const ListForm = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const addNewItem = (e) => {
    e.preventDefault();
    const itemName = document.getElementById('newItem').value;
    setShoppingList([
      ...shoppingList,
      { id: shoppingList.length, name: itemName },
    ]);
    clearInput();
  };

  const deleteItem = (id) => {
    const newList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newList);
  };

  const clearInput = () => {
    document.getElementById('newItem').value = '';
  };

  return (
    <form onSubmit={addNewItem}>
      <h3>Your shopping list:</h3>
      <List list={shoppingList} deleteItem={deleteItem} />
      <input id='newItem' type='text' placeholder='Add new item...'></input>
      <button>Add new item</button>
    </form>
  );
};

export default ListForm;

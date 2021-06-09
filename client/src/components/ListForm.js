import { useState } from 'react';
import List from './List';

const ListForm = () => {
  const [shoppingList, setShoppingList] = useState([
    { id: 0, name: 'Please enter your first list item...' },
  ]);

  const addNewItem = (e) => {
    e.preventDefault();
    const itemName = document.getElementById('newItem').value;
    setShoppingList([
      ...shoppingList,
      { id: shoppingList.length, name: itemName },
    ]);
    clearInput();
  };

  const clearInput = () => {
    document.getElementById('newItem').value = '';
  };

  return (
    <form onSubmit={addNewItem}>
      <List list={shoppingList} />
      <input id='newItem' type='text' placeholder='Add new item...'></input>
      <button>Add new item</button>
    </form>
  );
};

export default ListForm;

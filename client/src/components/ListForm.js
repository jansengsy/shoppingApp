import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

const ListForm = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    getListItems();
  }, []);

  const getListItems = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/api/shoppingItem', config);
      setShoppingList(res.data);
    } catch (err) {
      alert(err);
    }
  };

  const addNewItem = (e) => {
    e.preventDefault();
    const itemName = document.getElementById('newItem').value;
    setShoppingList([
      ...shoppingList,
      { id: shoppingList.length, name: itemName },
    ]);
    clearInput();
  };

  const deleteItem = async (id) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.delete(`/api/shoppingItem/${id}`, config);
    alert(JSON.stringify(res.data.msg));
    getListItems();
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

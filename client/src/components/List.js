import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { uid } from 'uid';

import './List.css';

const List = (props) => {
  const { list, deleteItem } = props;
  const [shoppingList, setShoppingList] = useState(list);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setShoppingList(list);
    setListItems(
      shoppingList.map((item) => (
        <ListItem key={uid()} item={item} deleteItem={deleteItem} />
      ))
    );
  }, [list, deleteItem, shoppingList]);

  return <div className='shopping-list'>{listItems}</div>;
};

export default List;

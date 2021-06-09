import { useState, useEffect } from 'react';
import ListItem from './ListItem';

import './List.css';

const List = (props) => {
  const [shoppingList, setShoppingList] = useState(props.list);
  let listItems = shoppingList.map((item) => <ListItem item={item} />);

  useEffect(() => {
    setShoppingList(props.list);
    listItems = shoppingList.map((item) => <ListItem item={item} />);
  }, [props]);

  return <div className='shopping-list'>{listItems}</div>;
};

export default List;

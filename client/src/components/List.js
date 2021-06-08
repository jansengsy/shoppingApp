import { useState } from 'react';
import ListItem from './ListItem';

import './List.css';

const List = () => {
  const [shoppingList, setShoppingList] = useState([
    {
      id: 0,
      name: 'cheese',
    },
    {
      id: 1,
      name: 'bread',
    },
    {
      id: 2,
      name: 'butter',
    },
    {
      id: 3,
      name: 'ham',
    },
  ]);

  let listItems = shoppingList.map((item) => <ListItem item={item} />);

  return <div className='shopping-list'>{listItems}</div>;
};

export default List;

import './ListItem.css';

const ListItem = ({ item }) => {
  return (
    <div className='shopping-list-item'>
      <div className='item-part'>{item.id}</div>
      <div className='item-part'>{item.name}</div>
      <input type='radio' />
    </div>
  );
};

export default ListItem;

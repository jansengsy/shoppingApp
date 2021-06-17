import './ListItem.css';

const ListItem = ({ item, deleteItem }) => {
  return (
    <div className='shopping-list-item'>
      <input type='radio' />
      <div className='item-part'>{item.name}</div>
      <span value={item.id}>
        <i
          className='fa fa-times delete-icon'
          onClick={() => deleteItem(item._id)}
        />
      </span>
    </div>
  );
};

export default ListItem;

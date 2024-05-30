const Item = ({ item, onRemoveItems, onToggleItem }) => {
    const handleRemove = () => {
       onRemoveItems(item.id)
    };
    return (
      <li>
        <input type="checkbox" value={item.packed} onChange={() => {onToggleItem(item.id)}}></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={handleRemove}>❌</button>
      </li>
    );
  };

export default Item;
const Item = ({ name, quantity, category }) => {
    return (
      <li>
        <strong>{name}</strong>
        <div>Buy {quantity} in {category}</div>
      </li>
    );
  };
  
  export default Item;
  
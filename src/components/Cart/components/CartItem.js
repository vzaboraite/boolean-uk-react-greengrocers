import ItemImage from "../../ItemImage";
import QuantityButton from "./QuantityButton";

function CartItem(props) {
  const { cartItem, removeHandler, addHandler } = props;
  return (
    <li>
      <ItemImage className="cart--item-icon" item={cartItem.item} />
      <p>{cartItem.item.name}</p>
      <QuantityButton
        className="remove-btn"
        text="-"
        onClick={() => removeHandler(cartItem)}
      />
      <span className="quantity-text center">{cartItem.quantity}</span>
      <QuantityButton
        className="add-btn"
        text="+"
        onClick={() => addHandler(cartItem.item)}
      />
    </li>
  );
}

export default CartItem;

import CartItem from "./CartItem";

function CartItemList(props) {
  return (
    <ul className="item-list cart--item-list">
      {props.cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.item.id}
          cartItem={cartItem}
          addHandler={props.addHandler}
          removeHandler={props.removeHandler}
        />
      ))}
    </ul>
  );
}

export default CartItemList;

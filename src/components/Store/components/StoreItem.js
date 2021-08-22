import ItemImage from "../../ItemImage";

function StoreItem(props) {
  return (
    <li>
      <div className="store--item-icon">
        <ItemImage item={props.storeItem} />
      </div>
      <button
        onClick={() => {
          props.addItemToCart(props.storeItem);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}

export default StoreItem;

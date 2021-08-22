import ItemImage from "../../ItemImage";

function StoreItem(props) {
  const { storeItem, addItemToCart } = props;

  return (
    <li>
      <div className="store--item-icon">
        <ItemImage item={storeItem} />
      </div>
      <button
        onClick={() => {
          addItemToCart(storeItem);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}

export default StoreItem;

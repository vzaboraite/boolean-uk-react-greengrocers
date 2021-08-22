import StoreItem from "../components/StoreItem";

function StoreItemList(props) {
  const { storeItems, addItemToCart } = props;

  return (
    <ul className="item-list store--item-list">
      {storeItems.map((storeItem) => (
        <StoreItem
          key={storeItem.id}
          storeItem={storeItem}
          addItemToCart={addItemToCart}
        />
      ))}
    </ul>
  );
}

export default StoreItemList;

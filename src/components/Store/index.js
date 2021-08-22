import StoreItemList from "./components/StoreItemList";

function Store(props) {
  const { storeItems, addItemToCart } = props;
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <StoreItemList storeItems={storeItems} addItemToCart={addItemToCart} />
    </header>
  );
}

export default Store;

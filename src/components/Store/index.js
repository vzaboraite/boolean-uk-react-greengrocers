import { useState } from "react";
import FilterOptions from "./components/FilterOptions";
import StoreItemList from "./components/StoreItemList";

function Store(props) {
  const { storeItems, addItemToCart } = props;
  const [type, setType] = useState("");

  /* Filter functions */

  const filterByType = (storeItems) => {
    const filteredItems = storeItems.filter((item) => type === item.type);
    return filteredItems;
  };

  const getItemsToRender = (storeItems) => {
    let result = storeItems;
    if (type !== "") {
      result = filterByType(storeItems);
    }
    return result;
  };

  const itemsToRender = getItemsToRender(storeItems);

  const handleTypeChange = (event) => setType(event.target.value);

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <form>
        <FilterOptions onChange={handleTypeChange} />
      </form>
      <StoreItemList storeItems={itemsToRender} addItemToCart={addItemToCart} />
    </header>
  );
}

export default Store;

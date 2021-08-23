function SortOptions(props) {
  const { onChange } = props;
  return (
    <>
      <label>Sort by:</label>
      <select name="types" id="types" onChange={onChange}>
        <option value="">-</option>
        <option value="priceLow">Price (low-high)</option>
        <option value="priceHigh">Price (high-low)</option>
        <option value="asc">Name (a-z)</option>
        <option value="des">Name (z-a)</option>
      </select>
    </>
  );
}

export default SortOptions;

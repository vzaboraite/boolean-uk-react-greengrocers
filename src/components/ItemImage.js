function ItemImage(props) {
  console.log("Props inside ItemImage: ", props);
  return (
    /* Problem: can't access icons that are stored in
      public folder.
      
      Solution: use absolute path instead of relative one, 
      because react code is compiled into html and both 
      index.html file and /assets folder are in same public folder.
    */
    <img src={`/assets/icons/${props.item.id}.svg`} alt={props.item.name} />
  );
}

export default ItemImage;

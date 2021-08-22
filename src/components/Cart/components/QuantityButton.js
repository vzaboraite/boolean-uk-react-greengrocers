function QuantityButton(props) {
  return (
    <button
      className={`quantity-btn center ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default QuantityButton;

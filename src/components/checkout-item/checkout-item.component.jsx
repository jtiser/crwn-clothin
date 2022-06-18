import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, quantity, name, price } = cartItem;
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);

  const addProductFromCartHandler = () => addItemToCart(cartItem);
  const removeProductFromCartHandler = () => removeItemFromCart(cartItem);
  const clearProductFromCartHandler = () => removeItemFromCart(cartItem, true);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeProductFromCartHandler}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={addProductFromCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearProductFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

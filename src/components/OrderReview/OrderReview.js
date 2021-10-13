import React from "react";
import { Link } from "react-router-dom";
import CartProducts from "../../hooks/cartProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProducts/ReviewProducts";
const OrderReview = () => {
  const [products] = CartProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (key) => {
    const RestProducts = cart.filter((product) => product.key !== key);
    setCart(RestProducts);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((products) => (
          <ReviewProducts
            key={products.key}
            product={products}
            handleRemove={handleRemove}
          ></ReviewProducts>
        ))}
      </div>
      <div className="cart-container">
        {
          <Cart cart={cart}>
            <Link>
              <button className="btn-regular">Process to Pay</button>
            </Link>
          </Cart>
        }
      </div>
    </div>
  );
};

export default OrderReview;

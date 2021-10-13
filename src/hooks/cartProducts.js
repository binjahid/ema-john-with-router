import { useEffect } from "react";
import { useState } from "react";

const CartProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return [products];
};
export default CartProducts;

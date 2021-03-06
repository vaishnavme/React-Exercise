import React, { useState } from "react";
import "./Cart.css";

const productList = [
  { id: 1, item: "Laptop", price: 5000 },
  { id: 2, item: "Mobile", price: 3000 },
  { id: 3, item: "Gaming Cansole", price: 4300 },
  { id: 4, item: "Camera", price: 2000 }
];

function Cart() {
  const [products, setProducts] = useState(productList);
  const [cartItems, setCartItems] = useState([
    { id: 1, item: "Laptop", price: 5000, quantity: 1 }
  ]);

  const addToCartHandler = (id, item, price, fianlPrice) => {
    let newCartItem = {
      id: id,
      item: item,
      price: price,
      quantity: 1,
      finalPrice: price
    };
    if (cartItems.filter((item) => item.id === id).length) {
      setCartItems((prevItems) => {
        return prevItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              finalPrice: item.price * (item.quantity + 1)
            };
          }
          return item;
        });
      });
    } else {
      setCartItems([...cartItems, newCartItem]);
    }
    console.log(cartItems);
  };

  const removeCartHandler = (id, finalPrice, quantity) => {
    if (quantity > 1) {
      setCartItems((prevItems) => {
        return prevItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              finalPrice: item.price * (item.quantity - 1)
            };
          }
          return item;
        });
      });
    } else {
      setCartItems([...cartItems.filter((item) => item.id !== id)]);
    }
  };
  return (
    <div>
      <div className="products">
        <h1>Product List</h1>
        {products.map(({ id, item, price }) => (
          <div className="product__items" key={id}>
            <div className="product__info">
              <div className="product__name">{item}</div>
              <div className="product__price">{price}</div>
            </div>
            <div className="product__action">
              <button
                className="btn"
                onClick={() => addToCartHandler(id, item, price)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>Cart </h1>
        {cartItems.map(({ id, item, price, quantity, finalPrice }) => (
          <div className="cart__items" key={id}>
            <div className="product__info">
              <div className="product__name">{item}</div>
              <div className="product__price">{finalPrice}</div>
            </div>
            <div className="product__quantity">{quantity}</div>
            <div className="product__action">
              <button
                className="btn"
                onClick={() => addToCartHandler(id, item, price)}
              >
                +
              </button>
              <button
                className="btn"
                onClick={() => removeCartHandler(id, price, quantity)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;

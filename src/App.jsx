import { use } from "react";

import "./App.css";
import { useState } from "react";

function App() {
  const allAvailableItems = [
    {
      id: 1,
      name: "Black T shirt",
      price: 5,
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8,
    },
    {
      id: 3,
      name: "Thoub",
      price: 12,
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20,
    },
    {
      id: 5,
      name: "Couch",
      price: 50,
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70,
    },
  ];

  const [availableItems, setAvailableItems] = useState(allAvailableItems);

  const [shoopingCart, setShoopingCart] = useState([]);

  const [availableBalance, setAvailableBalance] = useState(100);
  const [warningMessage, setWarningMessage] = useState(""); // <<<STATE

  function handleAddToCart(item) {
    if (availableBalance > item.price) {
      const filterItems = availableItems.filter((oneItem) => {
        return oneItem.id !== item.id;
      });
      console.log(item);

      setAvailableItems(filterItems);
      setShoopingCart([...shoopingCart, item]);

      setAvailableBalance(availableBalance - item.price);
    } else {
      setWarningMessage(
        "Insufficient funds. Your balance is too low to purchase this item",
      );
    }
  }

  function handleRemoveFromShoppingCart(item) {
    const filterItems = shoopingCart.filter((oneItem) => {
      return oneItem.id !== item.id;
    });
    console.log(item);

    setShoopingCart(filterItems);
    setAvailableItems([...availableItems, item]);
    setAvailableBalance(availableBalance + item.price);
  }

  return (
    <>
      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
      {availableItems.map((oneItem) => (
        <div key={oneItem.id}>
          <p>Product ID: {oneItem.id}</p>
          <p>Product Name: {oneItem.name}</p>
          <p>Product Price: {oneItem.price}</p>

          <button
            onClick={() => {
              return handleAddToCart(oneItem);
            }}
          >
            Add to cart
          </button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      {shoopingCart.map((oneItem) => (
        <div key={oneItem.id}>
          <p>Product ID: {oneItem.id}</p>
          <p>Product Name: {oneItem.name}</p>
          <p>Product Price: {oneItem.price}</p>

          <button
            onClick={() => {
              return handleRemoveFromShoppingCart(oneItem);
            }}
          >
            Remove from cart
          </button>
        </div>
      ))}

      <div>{warningMessage}</div>
    </>
  );
}

export default App;

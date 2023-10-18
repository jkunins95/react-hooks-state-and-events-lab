import React, { useState } from "react";

function Item({ name, category }) {
  // create state variable to track if item is in cart
  const [inCart, setInCart] = useState(false);

  // set a class name for item based on whetehr its in the cart or not
  const itemClass = inCart ? "in-cart" : "";

  // create a function to handle add/remove from cart on button click
  function handleClick() {
    setInCart(!inCart)
  }


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

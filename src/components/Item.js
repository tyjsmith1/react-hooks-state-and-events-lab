import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, updateCart] = useState(false)

  function handleCartClick () {
    
    updateCart(!inCart)
  }

  const cartClass = inCart ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
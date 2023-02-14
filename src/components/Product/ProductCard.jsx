import React, { useState, useEffect } from "react";
import icon from "../../assets/addedIcon.svg";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cartItems = JSON.parse(savedCart);
      const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
      setIsAdded(!!itemInCart);
    }
  }, [item.id]);

  const handleClick = () => {
    setIsLoading(true);

    fetch("https://reqres.in/api/products/3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setIsAdded(!isAdded); 
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const cartItems = savedCart ? JSON.parse(savedCart) : [];
    if (isAdded) {
      cartItems.push(item);
    } else {
      const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [isAdded, item]);

  return (
    <div className="card">
      <img className="paintings" src={item.img} alt="" />
      <p className="tite">{item.title}</p>
      <p className="creator">{item.creator}</p>
      <div className="price-btn-container">
        <div>
          <p className="prev-price">{item.prevPrice}</p>
          <p className="price">{item.price}</p>
        </div>
        <div>
          <button
            className={`buy-button ${isAdded ? "added" : ""}`}
            onClick={handleClick}
          >
            {isAdded ? (
              <>
                <img className="added" src={icon} alt="" />
                В корзине
              </>
            ) : isLoading ? (
              <>Loading...</>
            ) : (
              "Купить"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import Button from "./Button";

const Product = ({ src, name, description, price }) => {
  
  const addToCart = () => alert(`${name} added to cart.`);
  const addToFavorite = () => alert(`${name} added to favorites.`);

  return (
    <div className="col">
      <div className="card shadow zoom">
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between align-items-center w-100">
            <span>{name}</span>
            <span className="text-muted">
              &#x20B1;{price.toLocaleString({}, { currency: "PHP" })}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between">
            <Button className="btn btn-primary" onClick={addToCart}>
              Add To Cart
            </Button>
            <Button className="btn btn-danger" onClick={addToFavorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill text-white"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

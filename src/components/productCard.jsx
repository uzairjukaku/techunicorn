import React from "react";

const ProductCard = (props) => {
//   console.log(props);
  return (
    <div className="card">

<img src="/asset/like.svg" className="wishlist" alt=""  />
      <img src={props.product.image} alt="" />
           <div className="details">
        <p className="productname">{props.product.title}</p>

        <div className="stars">
          {props.product.rating.rate >= 1 ? (
            <img className="starsimg" src="/asset/star.svg" alt="" />
          ) : (
            <></>
          )}

          {props.product.rating.rate >= 2 ? (
             <img className="starsimg" src="/asset/star.svg" alt="" />
          ) : (
            <></>
          )}
          {props.product.rating.rate >= 3 ? (
             <img className="starsimg" src="/asset/star.svg" alt="" />
          ) : (
            <></>
          )}
          {props.product.rating.rate >= 4 ? (
             <img className="starsimg" src="/asset/star.svg" alt="" />
          ) : (
            <></>
          )}
             {props.product.rating.rate >= 5 ? (
             <img className="starsimg" src="/asset/star.svg" alt="" />
          ) : (
            <></>
          )}

          {/* <img src="/asset/star.svg" alt=""  />
    <img src="/asset/star.svg" alt=""  />
    <img src="/asset/star.svg" alt=""  />
    <img src="/asset/star.svg" alt=""  />
    <img src="/asset/star.svg" alt=""  /> */}
        </div>
        <p className="brand"> {props.product.category}</p>

        <p className="price">{props.product.price}$ </p>
      </div>
    </div>
  );
};

export default ProductCard;

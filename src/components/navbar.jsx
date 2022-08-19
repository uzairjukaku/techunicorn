import React from "react";
const Navbar = () => {
  return (
    <nav>
      <div className="topheader">
        <div className="col1">Dealerz.</div>
        <div className="col2">
          <ul>
            <li>
              <img src="/asset/phone.svg" alt=""  /> Call Center
            </li>
            <li>
             
              <img src="/asset/truck.svg" alt=""  /> Shipping & Returns
            </li>
          </ul>
        </div>
      </div>
      <div className="topheader2">

      <div className="subheader">

        <div className="col1">
          <ul>
            <li>Shop</li>
            <li>Promo</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col2">
<input type="text" className="searchbartop"  placeholder="Search....."/>

        </div>
        <div className="col3">

            <ul>
                <li><img src="/asset/like.svg" alt=""  /></li>
                <li><img src="/asset/cart.svg" alt=""  /></li>
                <li><img src="/asset/user.svg" alt=""  /></li>
                <li><img src="/asset/bell.svg" alt=""  /></li>
             
            </ul>
        </div>
      </div>
      </div>
    </nav>
  )
};

export default Navbar;

import React from "react";
import "../css/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="navbar">
      <MenuIcon className="ham" />
      <span className="All">All</span>
      <span className="todeal">Todays Deals</span>
      <span className="todeal">Registry</span>
      <span className="todeal">Customers Service</span>
      <span className="todeal">Gift Cards</span>
      <span className="todeal">Amazon Basics</span>
      <span className="todeal">Best Sellers</span>
      <span className="todeal">Sell</span>
      <span className="todeal">Music</span>
      <span className="todeal">Books</span>
      <span className="todeal">Pharmacy</span>
      <span className="todeal">Get Free Shipping to the Philippines</span>
    </div>
  );
}

export default Navbar;

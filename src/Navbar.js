import React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className="navbar">
      <MenuIcon className="ham" />
      <span className="All">All</span>
      <span className="todeal">Todays Deals</span>
      <span className="todeal">Registry</span>
      <span className="todeal">Customers Service</span>
      <span className="todeal">Gift Cards</span>
      <span className="todeal">Sell</span>

      <span className="free">Get Free Shipping to the Philippines</span>




    </div>
  )
}

export default Navbar

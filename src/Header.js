import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PlaceIcon from '@mui/icons-material/Place';
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon_logo"
      />
      <div className="header__options">
          <span className="header_optionLineOne toptxt">Deliver to</span>
          <span className="header_optionLineTwo country"><PlaceIcon className="header__location"/>Philippines</span>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search Amazon" />
       <SearchIcon className="header__searchIcon" />
      </div>
   
      <div className="header__nav">

        
      <div className="header__options">
       
          <span className="header_optionLineTwo">
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F5%2FUSA-PNG-Clipart.png&f=1&nofb=1&ipt=2f15b2a9763ee2b790a4f85d0efdfdbb15d7e73baa0b72f499e1fa580fabed66&ipo=images" alt="us-flag"  className="us"/> 
            EN
            </span>
        </div>

        <div className="header__options">
          <span className="header_optionLineOne">Hello Chan</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>

        <div className="header__options">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo"> & Orders</span>
          </div>

          <div className="header__options">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
          </div>
          
          <div className="header__optionBasket">
          <ShoppingBasketIcon/>
          <span className="header__optionLineTwo header__basketCount">0</span>
          </div>

      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "../css/Signin.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Signin() {
  return (
    <>
      <div className="signin">
        <div className="signin__inner">
          <span className="see">See personalize recommendations</span>
          <Link to="./login">
            <button className="signin__button">Sign in</button>
          </Link>
          <span className="newc">
            New customer?{" "}
            <a href="https://github.com/lightdarkmaster">Start here.</a>
          </span>
        </div>
      </div>
      <button className="backtotop">Back to top</button>
      <div className="footer1">
        <div className="footer1__row">
          <div className="footer1__column">
            <span className="footer__head">Getting to Know Us</span>
            <span className="footer__sub">Careers</span>
            <span className="footer__sub">Blog</span>
            <span className="footer__sub">About Amazon</span>
            <span className="footer__sub">Investor Relations</span>
            <span className="footer__sub">Amazon Devices</span>
            <span className="footer__sub">Amazon Science</span>
          </div>

          <div className="footer1__column">
            <span className="footer__head">Make Money with Us</span>
            <span className="footer__sub">Sell products on Amazons</span>
            <span className="footer__sub">Sell on Amazon Business</span>
            <span className="footer__sub">Sell apps on Amazon</span>
            <span className="footer__sub">Become an Affiliate</span>
            <span className="footer__sub">Advertise Your Products</span>
            <span className="footer__sub">Self-Publish with Us</span>
            <span className="footer__sub">Host an Amazon Hub</span>
            <span className="footer__sub">›See More Make Money with Us</span>
          </div>

          <div className="footer1__column">
            <span className="footer__head">Amazon Payment Products</span>
            <span className="footer__sub">Amazon Business Card</span>
            <span className="footer__sub">Shop with Points</span>
            <span className="footer__sub">Reload Your Balance</span>
            <span className="footer__sub">Amazon Currency Converter</span>
          </div>

          <div className="footer1__column">
            <span className="footer__head">Let Us Help You</span>
            <span className="footer__sub">Amazon and COVID-19</span>
            <span className="footer__sub">Your Account</span>
            <span className="footer__sub">Your Orders</span>
            <span className="footer__sub">Shipping Rates & Policies</span>
            <span className="footer__sub">Returns & Replacements</span>
            <span className="footer__sub">Manage Your Content and Devices</span>
            <span className="footer__sub">Amazon Assistant</span>
            <span className="footer__sub">Help</span>
          </div>
        </div>
      </div>
      <div className="footer1__sub">
        <span className="footer__logo">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo-amazon"
          />
        </span>
        <span className="footer__sub1">English</span>
        <span className="footer__sub1">
          <strong>$ </strong>USD - US Dollar
        </span>
        <span className="footer__sub1">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F5%2FUSA-PNG-Clipart.png&f=1&nofb=1&ipt=2f15b2a9763ee2b790a4f85d0efdfdbb15d7e73baa0b72f499e1fa580fabed66&ipo=images"
            alt="us-flag"
            className="us"
          />
          United States
        </span>
      </div>
    </>
  );
}

export default Signin;
//this is a signin page. be sure to sign in first.

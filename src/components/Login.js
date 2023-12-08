import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiqexpress.co.uk%2Fwp-content%2Fuploads%2F2018%2F01%2Famazon-logo-transparent.png&f=1&nofb=1&ipt=3ecaf2bf89c076f174e6c47c8634497efe41582a407dc42fe465d8876cb06c65&ipo=images"
          alt="amazon_logo"
        />
      </Link>
      <div className="login__container">
        <h2> Sign in</h2>
        <br />
        <span className="login__span">
          <label>
            <strong>Email or mobile phone number</strong>
          </label>
        </span>

        <input type="email" name="email" className="login__input" />
        <br />
        <br />
        <button className="continue">Continue</button>
        <br />
        <br />
        <span className="login__span">
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </span>
        <br />
        <br />
        <span className="login__span">Need help?</span>
        <hr />
        <span>
          <strong>Buying for work?</strong>
        </span>
        <br />
        <span className="login__span">Shop on Amazon Business</span>
      </div>
      <div className="amazon__questions"></div>
      <button className="create__acc">Create you Amazon Account</button>
    </div>
  );
}

export default Login;

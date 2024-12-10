import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import loginImage from "../assets/okl.jpg"

const SignInForm = () => {
  return (
    <div className="for">
      <div className="form-container">
        <div className="fc">
          <form>
            <h2>Code And Chill</h2>
            <section className="input-section">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" placeholder="Username" />
            </section>

            <section className="input-section">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Email" />
            </section>

            <section className="input-section">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Password" />
            </section>

            <section className="subm">
              <button type="submit"><Link to="/home">Signup</Link></button>
            </section>

            <section className="gm">
              <div className="bu">
                <a href="#">Sign in with Google</a>
              </div>
              <div className="bu">
                <a href="#">Sign in with Microsoft</a>
              </div>
            </section>

            <section className="olduser">
              <p>Already have an account?</p>
              <div className="Login">
                <Link to="/Signin">Login</Link>
              </div>
            </section>
          </form>
        </div>
      </div>
      <div className="image-container">
      <img src={loginImage} alt="login-image" />
      </div>
    </div>
  );
};

export default SignInForm;

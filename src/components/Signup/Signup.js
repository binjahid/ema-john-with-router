import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="loginAndRegister-form">
      <div>
        <form action="">
          <p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Please Enter Your Name"
              required
            />
          </p>
          <p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Please Enter Your Email"
              required
            />
          </p>
          <p>
            <input
              type="password"
              name=""
              id=""
              placeholder="please Enter Your Password"
              required
            />
          </p>
        </form>
        <div>
          Already Registered <Link to="/login">Login Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";
import useFisebase from "../../hooks/useFirebase";
import "./Login.css";
const Login = () => {
  const { signInWithGoogle } = useFisebase();
  return (
    <div className="loginAndRegister-form">
      <div>
        <h2>Please Login Here </h2>
        <form onSubmit="">
          <p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Please Enter Your Email"
            />
          </p>
          <p>
            <input
              type="password"
              name=""
              id=""
              placeholder="Please Enter Your Password"
            />
          </p>
          <input type="submit" value="Submit" />
        </form>
        <div>
          Not have any account <Link to="/register">Register Here</Link>
        </div>
        <div className="or"> ---OR---</div>
        <button className="btn-regular" onClick={signInWithGoogle}>
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;

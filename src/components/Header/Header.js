import React from "react";
import { Link } from "react-router-dom";
import useFisebase from "../../hooks/useFirebase";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, handleSingOut } = useFisebase();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        {user?.email ? (
          <button onClick={handleSingOut}>Sign Out</button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;

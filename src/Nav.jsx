import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <h1>nav page</h1>
      <ul className="nav-links">
        <Link style={{ color: "grey" }} to="/about">
          <li>About</li>
        </Link>
        <Link style={{ color: "grey" }} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>{" "}
        </li>
        <li>
          <Link className="link" to="/About">
            About
          </Link>{" "}
        </li>
        <li>
          <Link className="link" to="/Service">
            Service
          </Link>{" "}
        </li>
        <li>
          <Link className="link" to="/Contact">
            Contact
          </Link>{" "}
        </li>
        <li>
          <Link className="link" to="/Teams">
            Teams
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

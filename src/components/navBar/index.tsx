import React from "react";

import "./style.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li className="menu_logo">
          <a href="/">Clean control</a>
        </li>
        <li className="menu_itens">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </li>

        <li className="menu_links">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  );
}

import React, { useState, useEffect } from "react";

import "./style.css";

export default function NavBar() {

  const [isFlutuante, setFlutuante] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setFlutuante(true);
      } else {
        setFlutuante(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      
      <nav className={`navbar ${isFlutuante ? "flutuante" : ""}`}>
        
     
        <ul>
          <li className="menu_logo">
            <a href="/">Clean Control</a>
          </li>
          <li className="menu_itens">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </li>
          <li className="menu_links">
            <a href="/login" className="btn_link">
              Login
            </a>
            <a href="/register" className="btn_link alternativo">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

// import { useState } from 'react'
import React from "react";

import NavBar from "../../components/navBar";
import "./style.css";

import imgCellPhone from "../../assets/imgs/cellPhone_v1-removebg-preview.png";

export default function LandingPage() {
  return (
    <>
      <NavBar />

      <section className="first_section">
        <div className="_content">
          <h1>Clean Control</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
          <p>
            Nihil quaerat corrupti blanditiis ab nisi libero repellat, molestiae
            architecto laborum accusamus minus quod maxime animi numquam beatae
            deserunt odio nam itaque?
          </p>

          <img src={imgCellPhone} alt="imgCellPhone" />
        </div>
      </section>
    </>
  );
}

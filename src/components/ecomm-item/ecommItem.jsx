import React from "react";

import "./style.css";

export default function EcommItem({ data }) {
  const { id, title, image } = data;
  return (
    <div className="ecomm-item" id={id}>
      <div className="box-img-ecomm">
        <img src={image} alt={title} />
      </div>
      <div className="box-item-ecomm">
        <h3>{title}</h3>

<div className="box-btn">
<button className="btn" type="button">Visitar   <ion-icon name="arrow-forward-outline"></ion-icon></button>
</div>       
        <div className="filtro-ecomm-item">
          {/* icones de vegano, carne, festa, empresa */}
          <ion-icon name="fast-food-outline"></ion-icon>
          <ion-icon name="leaf-sharp"></ion-icon>
          <ion-icon name="balloon-sharp"></ion-icon>
          <ion-icon name="business-sharp"></ion-icon>
        </div>
      </div>
    </div>
  );
}

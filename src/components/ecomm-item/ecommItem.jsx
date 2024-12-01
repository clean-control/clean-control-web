import React from 'react';

import './style.css';

export default function EcommItem({ data }) {
    const { id, title, price, image } = data;
    return (
        <div className="ecomm-item" id={id}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price}</p>
        <button type="button">Comprar</button>
        </div>
    );
    }
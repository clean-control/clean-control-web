import React, { useRef } from 'react';
import EcommItem from "../ecomm-item/ecommItem";
import './style.scss';

export default function Session({ title, data }) {
    const contentRef = useRef(null);  

    const handleScroll = (direction) => {
        const container = contentRef.current;
        const scrollAmount = 1000; 
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="session">
            <h1>{title}</h1>
            <div className="content">
                <span
                    className="arrow left active"
                    onClick={() => handleScroll('left')}
                >
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
                <div className="content-ecomm" ref={contentRef}>
                    {data.map((item) => (
                        <span className='item' key={item.id}>
                            <EcommItem data={item} />
                        </span>
                    ))}
                </div>
                <span
                    className="arrow right active"
                    onClick={() => handleScroll('right')}
                >
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
            </div>
        </div>
    );
}

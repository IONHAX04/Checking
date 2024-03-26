import React, { useState, useEffect } from 'react';
import './carousel.css'

import img1 from '../../assets/pics/new_img/1.png'
import img2 from '../../assets/pics/new_img/2.png'
import img3 from '../../assets/pics/new_img/3.png'

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel" style={{ position: 'relative', width: '100%' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '50%', height: '100%' }} onClick={prevImage}></div>
            <div style={{ position: 'absolute', top: '0', right: '0', width: '50%', height: '100%' }} onClick={nextImage}></div>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ height: '400px', width: '100%' }} />
        </div>
    );
};

const App = () => {
    const images = [
        img1, img2, img3
    ];

    return (
        <div>
            <Carousel images={images} />
        </div>
    );
};

export default App;

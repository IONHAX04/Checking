import React, { useState, useEffect } from 'react';
import './activities.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/pics/new_img/1.png';
import img2 from '../../assets/pics/new_img/2.png';
import img3 from '../../assets/pics/new_img/3.png';

import youtube from '../../assets/cards/f-youtube.webp'

import youtubes from '../../assets/social/youtube.png'
import insta from '../../assets/social/instagram.png'
import twitter from '../../assets/social/twitter.png'
import telegram from '../../assets/social/telegram.png'

import socialTele from '../../assets/cards/1tele.png'
import socialtwitter from '../../assets/cards/1twitter.png'
import socialYoutube from '../../assets/cards/youtube.png'
import socialInsta from '../../assets/cards/insta.png'


export default function Activities() {
    const images = [img1, img2, img3];
    const [index, setIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(2);

    const handleSlideClick = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    const handleNextClick = () => {
        setIndex((index + 1) % images.length);
        const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
        setCurrentSlide(nextSlide);
    };

    const handlePrevClick = () => {
        const newIndex = (index - 1 + images.length) % images.length;
        setIndex(newIndex);
        const prevSlide = currentSlide === 1 ? 3 : currentSlide - 1;
        setCurrentSlide(prevSlide);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
            const nextSlide = currentSlide === 3 ? 1 : currentSlide + 1;
            setCurrentSlide(nextSlide);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, currentSlide]);

    return (
        <div className="activityContent" id='activities'>
            <div className='activities' data-aos="zoom-in-up" data-aos-delay="0">
                <p style={{ fontSize: '32px' }}>Catch my activities on</p>
                <div className="cardActivities">
                    <div className="cardIntro">
                        <img src={socialtwitter}
                            style={{
                                objectFit: 'cover',
                                height: '240px',
                                width: '270px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts">
                            <img src={twitter}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Twitter</p>
                        </div>
                        <a href="https://twitter.com/subu_thetrader" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                    <div className="cardIntro">
                        <img src={socialInsta}
                            style={{
                                objectFit: 'cover',
                                height: '240px',
                                width: '270px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts">
                            <img src={insta}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Instagram</p>
                        </div>
                        <a href="https://www.instagram.com/traintotrade_t2t/" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                    <div className="cardIntro">
                        <img src={socialYoutube}
                            style={{
                                objectFit: 'fill',
                                height: '240px',
                                width: '270px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts">
                            <img src={youtubes}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Youtube</p>
                        </div>
                        <a href="https://www.youtube.com/channel/UCuvzF0q40j9N51QHGCZvvHA" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                    <div className="cardIntro">
                        <img src={socialTele}
                            style={{
                                objectFit: 'fill',
                                height: '240px',
                                width: '270px',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px'
                            }} />
                        <div className="contacts" id='telegram'>
                            <img src={telegram}
                                height='30px'
                                width='30px'
                                style={{
                                    background: '#222'
                                }} />
                            <p style={{ fontSize: '24px', paddingTop: '14px', paddingLeft: '10px' }}>Telegram</p>
                        </div>
                        <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer" className='button'>Explore More</a>
                    </div>
                </div>
            </div>

            <div className="carouselContainer d-md-none d-block" data-aos="zoom-in-up" data-aos-delay="300">
                <div className="courses">
                    <Carousel activeIndex={index} onSelect={setIndex}>
                        <Carousel.Item>
                            <img
                                className='d-block images'
                                src={img1}
                                height='600px'
                                width='1200px'
                                alt='Course 1' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block images'
                                src={img2}
                                height='600px'
                                width='1200px'
                                alt='Course 2' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block images'
                                src={img3}
                                height='600px'
                                width='1200px'
                                alt='Course 3' />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>


            <div className="slider d-md-block d-none" id='slider'>
                <input type='radio' name='slide' id='s1' onClick={() => handleSlideClick(1)} checked={currentSlide === 1} />
                <input type='radio' name='slide' id='s2' onClick={() => handleSlideClick(2)} checked={currentSlide === 2} />
                <input type='radio' name='slide' id='s3' onClick={() => handleSlideClick(3)} checked={currentSlide === 3} />

                <label htmlFor="s1" id='slide1' style={{ borderRadius: '20px' }} >
                    <img src={img1} style={{ borderRadius: '20px' }} className='cardImg' height='100%' width='100%' />
                </label>
                <label htmlFor="s2" id='slide2' style={{ borderRadius: '20px' }} >
                    <img src={img2} style={{ borderRadius: '20px' }} className='cardImg' height='100%' width='100%' />
                </label>
                <label htmlFor="s3" id='slide3' style={{ borderRadius: '20px' }} >
                    <img src={img3} style={{ borderRadius: '20px' }} className='cardImg' height='100%' width='100%' />
                </label>

                <div className="nav-btn next" onClick={handleNextClick}>&#10095;</div>
                <div className="nav-btn prev" onClick={handlePrevClick}>&#10094;</div>
            </div>


        </div>
    );
}

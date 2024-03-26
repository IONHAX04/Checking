import React, { useState } from 'react'
import youtube from '../../assets/social/youtube.png'
import insta from '../../assets/social/instagram.png'
import twitter from '../../assets/social/twitter.png'
import telegram from '../../assets/social/telegram.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import './footer.css'


import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import { Col, Row } from 'react-bootstrap';


export default function Footer() {

    const [showTermsOfUse, setShowTermsOfUse] = useState(false);

    const handleShowTermsOfUse = () => setShowTermsOfUse(true);
    const handleCloseTermsOfUse = () => setShowTermsOfUse(false);

    const showNavbar = () => {
        navRef.current.classList.toggle('res_nav');
    };


    return (
        <div className='footerContent'>
            <div className='footer'>
                <div className="followMe" data-aos="flip-right" data-aos-delay="0">
                    <p style={{ fontSize: '24px', marginTop: '20px' }}>Follow Me</p>

                    <div className="contactInfo row">
                        <div className="col-lg-3 col-6 mb-4">
                            <div className="footer-follow">
                                <img src={twitter} height='30px' width='30px' />
                                <div className="texts">
                                    <p>Follow Me On <br />Twitter</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mb-4">
                            <a href='https://www.instagram.com/traintotrade_t2t/' style={{ textDecoration: 'none' }}>
                                <div className="footer-follow">
                                    <img src={insta} height='30px' width='30px' />
                                    <div className="texts">
                                        <p>Follow Me On <br />Insta</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-6 mb-4">
                            <a href='https://www.youtube.com/channel/UCuvzF0q40j9N51QHGCZvvHA' style={{ textDecoration: 'none' }}>
                                <div className="footer-follow">
                                    <img src={youtube} height='30px' width='30px' />
                                    <div className="texts">
                                        <p>Follow Me On <br />Youtube</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-6 mb-4">
                            <div className="footer-follow">
                                <img src={telegram} height='30px' width='30px' />
                                <div className="texts">
                                    <p>Follow Me On <br />Telegram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="queriesInfo" data-aos="flip-left" data-aos-delay="0">
                    <p style={{ fontSize: '20px' }}>Deliver your thoughts to make more meaningful decisions in life</p>
                    <input placeholder='Enter your email address' />
                </div>

            </div>
            {/* ================================= */}


            <Row className='footerCont'>
                <Col lg={6}>
                    <h5>COPYRIGHT © 2024 - Train 2 Trade. All Rights Reserved.</h5>
                </Col>

                <Col lg={5}>
                    <h5 variant="primary" onClick={handleShowTermsOfUse}>
                        Terms Of Use
                    </h5>
                    <Offcanvas show={showTermsOfUse} onHide={handleCloseTermsOfUse} backdrop="static">
                        <Offcanvas.Header closeButton >
                            <Offcanvas.Title>Disclaimer</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{ textAlign: 'justify', padding: '20px' }}>
                            <h2>Mandatory Disclaimer as Required by SEBI</h2>
                            <p>
                                <strong>Disclaimer from Admins as per SEBI norms:</strong> Equity investments are subject to 100% market risks. Refer to your financial consultant's advice before investing. This group is only for educational and learning purposes. Admins have no responsibility for your intended decisions and financial losses. Keep calculated and always analyze your cash position and risk-bearing capacity before following messages of our group postings. Stock market investments are VERY RISKY, and being part of this group, you agree that you understand the market risks involved. Profits and losses are part of the share market. Kindly understand and act wisely. All members please follow guidelines as applicable even in the past too. Now SEBI is more strict about their actions. Please kindly cooperate.
                            </p>
                            <h3>Disclaimer/ Disclosure</h3>
                            <ul>
                                <li>👉This group does not provide any tips/recommendations/advice</li>
                                <li>👉All updates/posts/discussions are only for education and learning purposes.</li>
                                <li>👉Do Consult your financial advisor before taking trades or investment decisions</li>
                                <li>👉Group Admins or Members are not responsible for any financial losses</li>
                                <li>👉Disclaimer/disclosure/terms and conditions applicable to all members of this channel</li>
                            </ul>
                            <p>All the posts are for education and learning purposes only👍</p>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
            </Row>
        </div>
    )
}

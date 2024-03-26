import React, { useState } from 'react'
import { Col, Row, Offcanvas, Button } from 'react-bootstrap';
import './terms.css'


export default function Terms() {

  const [showTermsOfUse, setShowTermsOfUse] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleShowTermsOfUse = () => setShowTermsOfUse(true);
  const handleCloseTermsOfUse = () => setShowTermsOfUse(false);

  const handleShowPrivacyPolicy = () => setShowPrivacyPolicy(true);
  const handleClosePrivacyPolicy = () => setShowPrivacyPolicy(false);

  return (
    <div className='bottom'>
      <Row className='footerContent'>
        <Col lg={6}>
          <h5>COPYRIGHT © 2024 - Train 2 Trade - Host. All Rights Reserved.</h5>
        </Col>

        <Col lg={3}>
          <h5 onClick={handleShowTermsOfUse}>Terms of Use</h5>
          <Offcanvas show={showTermsOfUse} onHide={handleCloseTermsOfUse} backdrop="static">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Terms Of Use</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ textAlign: 'justify' }}>
              <h4>1. Acceptance of Terms</h4>

            </Offcanvas.Body>nv
          </Offcanvas>
        </Col>

        <Col lg={3}>
          <h5 onClick={handleShowPrivacyPolicy}>Privacy Policy</h5>
          <Offcanvas show={showPrivacyPolicy} onHide={handleClosePrivacyPolicy} backdrop="static">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Privacy Policy</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <h4>1. Information Collection</h4>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </div>
  )
}
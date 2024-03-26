import React, { useState, useRef } from 'react'
import Accoridan from './Accoridan'
import './faq.css'
import Accordion from 'react-bootstrap/Accordion';

import { qns } from './qns'
export default function Faq() {
    const [data] = useState(qns);

    const accordions = document.getElementsByClassName('contextBx');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function () {
            this.classList.toggle('active');
        })
    }


    return (
        <div className='faq' data-aos="fade-up" data-aos-delay="0">
            <div className="faq-div">
                <div className="faq-title">
                    <h2>FAQ Section</h2>
                    <p>Click on the question tabs to know the answers</p>
                </div>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>I am new to the market. Can I enroll in the course?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you can enroll because we cover everything from the very basics to intermediate and pro-level.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do you provide calls?</Accordion.Header>
                        <Accordion.Body>
                            No, we don't provide calls. Instead, we foster a community of members where we discuss and learn from each other, which is more beneficial than following calls.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Do you have any EMI options?</Accordion.Header>
                        <Accordion.Body>
                            No, we do not offer any EMI options.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How long is the memorandum of appreciation valid?</Accordion.Header>
                        <Accordion.Body>
                            The validity period of the memorandum of appreciation varies depending on the issuing authority's policies. Typically, it serves as a formal acknowledgment indefinitely, recognizing one's contributions or achievements. For specific details regarding validity, it's best to check with the issuing authority.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

            {/* <div className="scroll-container">
                <div className="disclaimer">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium tempore deleniti quas exercitationem ut? Explicabo animi id quisquam quis maiores, placeat incidunt, sequi dolores, ex consequatur repellendus recusandae sunt deleniti?</p>
                </div>
            </div> */}
        </div>
    )
}

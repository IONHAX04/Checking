import React, { useState } from 'react'

import Accordion from 'react-bootstrap/Accordion';

import { MdAdd } from 'react-icons/md'
import { BiMinusCircle } from 'react-icons/bi'

import './acc.css'

export default function Accoridan(props) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className='faq'>
                <div className="accordian_box">
                    <div className="ques-icon-div">
                        <div className="icon-div">
                            <p onClick={() => setShow(!show)}>
                                {
                                    show ? (<BiMinusCircle style={{ marginRight: "1rem" }} />) :
                                        (<MdAdd style={{ marginRight: "1rem" }} />)
                                }
                            </p>
                        </div>
                        <div className="ques-ans-div">
                            <h3>{props.question}</h3>
                            {show && <p>{props.response}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

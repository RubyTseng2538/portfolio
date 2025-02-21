import React from 'react';
import Summary from '../components/Summary';
import { useNavigate } from 'react-router-dom'
import mobile from '../images/mobileEx.png';
import PWA from '../images/PWAEx2.png';
import { Col, Row } from 'react-bootstrap';
import Picture from '../images/Picture.jpg';

export default function HomePage(){
    let navigate = useNavigate();
    return (
        <div>
            <div className='home'>
                <Row className='aligh-items-center'>
                    <Col className='justify-content-center' >
                        <div className='home-text'>
                            <h1>Hi, I'm Ruby</h1>
                            <h2>I translate ideas into fully functioning apps, focusing on intuitive design and scalable solutions. </h2>
                        </div>
                    </Col>
                    <Col>
                    <img className='pfp' src={Picture} alt="Profile" />
                    </Col>
                </Row>
            </div>
            <div className='works'>
                <h1 className='works-title'>Works</h1>
                <div className='summary-container'>
                    <Summary 
                    imageSrc={PWA} 
                    projectTitle="Document Storing App"
                    text="The app allows users to store documents online and access them from anywhere.
                    It currently support only PDF files and youtube videos.
                    It is built using React, Firebase, and Ant Design."
                    onClick={()=>navigate('/project1')} />
                    <Summary 
                    imageSrc={mobile} 
                    projectTitle="Mobile Donation Tracking App"
                    text="A mobile app designed to simplify donation tracking and automate receipt management for non-profit organizations, ensuring transparency and efficiency in their financial operations."
                    onClick={()=>navigate('/project2')} />
                </div>
            </div>
        </div>
    )
}
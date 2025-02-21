import React from "react";
import {Col, Row} from 'react-bootstrap';
import Picture from '../images/Picture.jpg';

export default function About(){
    return (
        <div className='about'>
            <Row className='aligh-items-center'>
                <Col className='justify-content-center' >
                    <div className='about-text'>
                    <h1>More About Me</h1>
                    <h2>
                    Hi, I’m Ruby Tseng, a developer based in Fremont, California. My passion for design started early, and over the years, I’ve developed a keen eye for style. While I enjoy intricate details in many areas, I prefer my web designs to be clean, sophisticated, and interactive.

I’m detail-oriented but thrive in team settings, often drawing inspiration from my teammates’ ideas to enhance my work. My focus is on creating engaging user interfaces with smooth, intuitive experiences.

I’m proficient in JavaScript and experienced with libraries like React.js and Express.js, using them to bring ideas to life.

In my free time, I love playing games and listening to K-pop Musics!
                    </h2>
                    </div>
                </Col>
                <Col>
                    <img className='pfp' src={Picture} alt="Profile" />
                </Col>
            </Row>    
        </div>
    )
};
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row className="justify-content-center">
                <Col className="footer-col">
                    <Row className="justify-content-center">Design and Developed by Ruby Tseng</Row>
                    <Row  className="justify-content-center">Copyright © {year} Ruby Tseng</Row>
                </Col>     
            <Col>
                <Row className="justify-content-center">
                    <Col  className="footer-col">
                        <Row>Social Media</Row>
                        <Row xs="auto">
                            <Col><FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/ruby-tseng-rt/')} /></Col>
                            <Col><FaGithub onClick={() => window.open('https://github.com/RubyTseng2538')} /></Col>
                        </Row>
                    </Col>
                    <Col  className="footer-col">
                        <Row>Location</Row>
                        <Row>Fremont, CA</Row>
                    </Col>
                    <Col className="footer-col">
                        <Row>Contacts</Row>
                        <Row>rubytseng54@gmail.com</Row>
                    </Col>
                </Row>
            </Col>
            </Row>
            

        </Container>
    )
}

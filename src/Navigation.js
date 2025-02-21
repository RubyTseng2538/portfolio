import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from './pages/resume.pdf'; // Assuming you have a PDF file for download

const Navigation = () => {
    return (
        <nav className="navigation">
            <Container fluid>
                <Row className="justify-content-end">
                    <Col xs="auto" className="nav-item">
                        <Link to="/">Portfolio</Link>
                    </Col>
                    <Col xs="auto" className="nav-item">
                        <Link to="/about">About</Link>
                    </Col>
                    <Col xs="auto" className="nav-item">
                        <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    </Col>
                    
                </Row>
            </Container>
        </nav>
    );
};

export default Navigation;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/juliaarisanda"><FaInstagram size={32} color="white"/></a>
              <a href="https://github.com/juliaarisanda"><FaGithub size={32} color="white"/></a>
              <a href="https://www.linkedin.com/in/julia-arisanda-h-690b71139/"><FaLinkedin size={32} color="white"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

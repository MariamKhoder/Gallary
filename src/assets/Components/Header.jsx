import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../css/index.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="p-4 nav">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '2rem' }}>Photosen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" style={{ gap: '2rem' }}> 
            <NavLink to="/" className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>HOME</NavLink>
            <NavLink to="/gallery" className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>GALLERY</NavLink>
            
            <NavLink to="/services" className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>SERVICES</NavLink>
            <NavLink to="/about" className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>ABOUT</NavLink>
            <NavLink to="/contact" className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>CONTACT</NavLink>
          </Nav>
          <Nav>
            <Nav.Link href="#instagram"><FaInstagram size={20} /></Nav.Link>
            <Nav.Link href="#facebook"><FaFacebook size={20} /></Nav.Link>
            <Nav.Link href="#twitter"><FaTwitter size={20} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Set active link based on current route
  const activeLink = location.pathname.substring(1) || 'home';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home', path: '/' },
    { id: 'about', name: 'About', path: '/about' },
    { id: 'services', name: 'Services', path: '/services' },
    { id: 'portfolio', name: 'Portfolio', path: '/portfolio' },
    { id: 'contact', name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`py-1 py-md-2 ${scrolled ? 'bg-dark shadow-sm' : 'bg-transparent'} transition-all`}
      variant="dark"
      style={{ 
        zIndex: 1030,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent'
      }}
    >
      <Container fluid="lg">
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="ms-2 ms-md-0 p-0"
          onClick={handleNavClick}
        >
          <Image 
            src="/WhatsApp_Image_2025-04-08_at_06.38.52-removebg-preview.png" 
            alt="007PRO Logo"
            height="40"
            width="auto"
            className="d-inline-block align-top"
            style={{
              maxHeight: '50px',
              objectFit: 'contain'
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="main-navbar" 
          className="me-2 border-0"
          style={{ boxShadow: 'none' }}
        >
          <span className={`navbar-toggler-icon ${expanded ? 'open' : ''}`}></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar" className="justify-content-end bg-dark bg-md-transparent">
          <Nav className="me-md-3 mb-3 mb-md-0 text-center text-md-start">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                as={Link}
                to={link.path}
                className={`px-3 py-2 py-md-1 ${activeLink === link.id ? 'text-spy-gold active-link' : 'text-spy-silver hover-text-spy-gold'}`}
                onClick={handleNavClick}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <Button
              as={Link}
              to="/contact"
              variant="outline"
              className="border-spy-gold text-spy-gold hover-bg-spy-gold hover-text-dark mx-3 mx-md-0 ms-md-3"
              style={{ 
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onClick={handleNavClick}
            >
              Get in Touch
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
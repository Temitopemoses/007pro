import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  ArrowUpCircle, Envelope, Phone 
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="pt-5 pb-4 position-relative"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #121212 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)'
      }}
    >
      {/* Gold accent elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div className="position-absolute top-0 end-0 w-100 h-100 rounded-circle bg-spy-gold/10 blur-3xl" 
          style={{ width: '20rem', height: '20rem' }}></div>
      </div>

      <Container className="position-relative z-10">
        <Row className="g-4">
          {/* Brand Column */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex flex-column h-100">
              <h2 className="text-spy-gold mb-3">
                <span>007</span>
                <span className="text-spy-silver">pro</span>
              </h2>
              <p className="text-spy-silver/80 mb-4">
               Get in touch
               Let's take your coin to the next level
              </p>
              <div className="mt-auto">
                <div className="d-flex gap-3 mb-4">
                  <a href="#" className="text-spy-silver hover-text-spy-gold transition">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-spy-silver hover-text-spy-gold transition">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-spy-silver hover-text-spy-gold transition">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-spy-silver hover-text-spy-gold transition">
                    <Linkedin size={20} />
                  </a>
                </div>
                <button 
                  onClick={scrollToTop}
                  className="btn btn-link text-white hover-text-spy-gold p-0 transition d-flex align-items-center text-decoration-none"
                >
                  <ArrowUpCircle size={20} className="me-2 text-white" />
                  Back to Top
                </button>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4} lg={3} className="mb-4 mb-md-0">
            <h5 className="text-spy-silver mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name} className="mb-2">
                  <Link
                    to={link.path}
                    className="text-spy-silver/80 hover-text-spy-gold transition text-decoration-none"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} lg={3}>
            <h5 className="text-spy-silver mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <Envelope className="text-spy-gold me-3 mt-1" size={18} />
                <a href="mailto:contact@007pro.com" className="text-spy-silver/80 hover-text-spy-gold transition text-decoration-none">
                  contact@007pro.com
                </a>
              </li>
              <li className="d-flex align-items-start">
                <Phone className="text-spy-gold me-3 mt-1" size={18} />
                <a href="tel:+1234567890" className="text-spy-silver/80 hover-text-spy-gold transition text-decoration-none">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={4} lg={2}>
            <h5 className="text-spy-silver mb-4">Stay Updated</h5>
            <form>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control bg-dark border-spy-silver text-spy-silver" 
                  placeholder="Your Email"
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-sm bg-spy-gold text-dark border-0 w-100"
              >
                Subscribe
              </button>
            </form>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-5 pt-3 border-top border-spy-silver/10">
          <Col className="text-center text-spy-silver/60">
            <small>© {new Date().getFullYear()} 007PRO. All rights reserved. Licensed to Thrill.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
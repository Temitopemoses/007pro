import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <CustomNavbar />

      <section
        id="home"
        className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5"
        style={{
          background: "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)",
          backgroundSize: "cover",
        }}
      >
        {/* Animated background elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20">
          <div className="cyber-grid-overlay"></div>
          <div className="position-absolute top-25 start-25 rounded-circle bg-spy-accent/20 blur-3xl" style={{ width: '24rem', height: '24rem' }}></div>
          <div className="position-absolute bottom-25 end-33 rounded-circle bg-spy-gold/10 blur-3xl" style={{ width: '16rem', height: '16rem' }}></div>
        </div>

        <Container className="position-relative z-10">
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <h1 className="display-3 display-md-1 fw-bold mb-4">
                  <span className="text-spy-silver">Welcome to </span>
                  <span className="text-spy-gold">007</span>
                  <span className="text-spy-silver">pro</span>
                </h1>

                <p className="lead text-spy-silver/80 mb-4 mb-md-5">
                  Leave Your MemeCoin to the PROs — Let the OO7 PRO's Supercharge Your Engagement With Electrifying Results. From Gutter to Hero, the PRos would remake your Meme through a Fury Furnace.
                </p>

                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                  <Link to="/services">
                    <Button
                      variant="primary"
                      className="bg-spy-gold text-dark border-0 hover-bg-spy-gold-dark py-3 px-4 fw-medium shadow"
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Get Started
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button
                      variant="outline-light"
                      className="border-spy-silver text-spy-silver hover-bg-spy-silver/10 py-3 px-4 fw-medium"
                    >
                      Book a Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={6} className="d-flex justify-content-center align-items-center">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  borderRadius: '1rem',
                  backgroundColor: '#000',
                }}
              >
                <video
                  src="/home_page.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    filter: 'grayscale(30%) contrast(110%)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  poster="/fallback_image.jpg"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <a
          href="#about"
          className="position-absolute bottom-0 start-50 translate-middle-x text-spy-silver hover-text-spy-gold transition mb-4"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </a>
      </section>
    </>
  );
};

export default Home;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  ArrowRight,
  ShieldLock,
  BarChart,
  Lightning,
  Bullseye,
  Eye,
  Award,
  Globe,
  CurrencyBitcoin,
  Wallet2,
  Send
} from 'react-bootstrap-icons';
import CustomNavbar from '../components/Navbar';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <CustomNavbar />
      
      {/* Hero Section with Video Background */}
      <section 
        className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
        style={{
          paddingTop: '6rem'
        }}
      >
        {/* Video Background */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-100 h-100 object-fit-cover"
            style={{ opacity: 0.15 }}
          >
            <source src="/videos/WhatsApp Video 2025-04-08 at 06.42.22.mp4" type="video/mp4" />
            <source src="/videos/WhatsApp Video 2025-04-08 at 06.42.22.webm" type="video/webm" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/WhatsApp Image 2025-04-08 at 06.34.42.jpeg" 
              alt="Crypto background" 
              className="w-100 h-100 object-fit-cover"
            />
          </video>
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70"></div>
        </div>

      
           {/* Animated background elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20">
          <div className="cyber-grid-overlay"></div>
          <div className="position-absolute top-25 start-25 rounded-circle bg-spy-accent/20 blur-3xl" 
            style={{ width: '24rem', height: '24rem' }}></div>
          <div className="position-absolute bottom-25 end-33 rounded-circle bg-spy-gold/10 blur-3xl" 
            style={{ width: '16rem', height: '16rem' }}></div>
        </div>

        <Container className="position-relative z-10 py-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4 text-spy-silver">
                <span className="text-spy-gold"><ShieldLock size={48} className="me-2 mb-2" />007</span>PRO
              </h1>
              <p className="lead text-spy-silver/80 mb-5 d-flex align-items-center">
                <CurrencyBitcoin size={24} className="me-2 text-spy-gold" />
                Your <span className="text-spy-gold mx-1">classified</span> marketing partner for blockchain domination
              </p>
              <div className="d-flex align-items-center">
                <Globe size={20} className="me-2 text-spy-silver" />
                <span className="text-spy-silver/80">Worldwide coverage - 24/7 operations</span>
              </div>
            <div className="mt-4">
              <Button 
                 variant="primary" 
                className="bg-spy-gold text-dark border-0 hover-bg-spy-gold-dark py-3 px-4 fw-medium shadow"
                style={{ transition: 'all 0.3s ease' }}
                size="lg" 
                href="/portfolio"
              >
                <ArrowRight className="me-2" /> View Our Portfolio
              </Button>
            </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Who We Are Section - unchanged from original */}
      <section id="who-we-are" className="py-5 bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="text-center mb-5">
                <h2 className="text-spy-gold mb-3 d-flex align-items-center justify-content-center">
                  <Award size={32} className="me-3" /> Who We Are
                </h2>
                <div className="divider mx-auto bg-spy-gold" style={{ height: '2px', width: '80px' }}></div>
              </div>
              <p className="text-spy-silver text-center lead">
                OO7PRO is a full-suite crypto marketing and project growth agency, designed specifically for meme coins on any Blockchain projects (SOL, ETH, MATIC, ADA, AVAX, BSC etc). Like James Bond, we overdeliver—no cap.
              </p>
              <div className="d-flex justify-content-center mt-4">
                <div className="d-flex align-items-center me-4">
                  <Wallet2 size={20} className="me-2 text-spy-gold" />
                  <span className="text-spy-silver">Multi-chain</span>
                </div>
                <div className="d-flex align-items-center">
                  <Send size={20} className="me-2 text-spy-gold" />
                  <span className="text-spy-silver">Rapid deployment</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section - unchanged from original */}
      <section id="mission" className="py-5 bg-black">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="text-center mb-5">
                <h2 className="text-spy-gold mb-3 d-flex align-items-center justify-content-center">
                  <BarChart size={32} className="me-3" /> Our Mission
                </h2>
                <div className="divider mx-auto bg-spy-gold" style={{ height: '2px', width: '80px' }}></div>
              </div>
              <p className="text-spy-silver text-center lead mb-5">
                To amplify your project's mind share, reach visibility, hype, and trust in the community through Organic/Paid approach professional-grade services and unmatched engagement strategies.
              </p>
              
            </Col>
          </Row>
        </Container>
      </section>

      {/* Enhanced Values Section with Interactive Cards */}
      <section id="values" className="py-5 bg-dark">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="text-spy-gold mb-3 d-flex align-items-center justify-content-center">
                <Lightning size={32} className="me-3" /> Our Operational Values
              </h2>
              <div className="divider mx-auto bg-spy-gold" style={{ height: '2px', width: '80px' }}></div>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              {
                title: "Precision Targeting",
                content: "We identify and engage your ideal community with sniper-like accuracy",
                icon: <Bullseye size={32} className="text-spy-gold mb-3" />
              },
              {
                title: "Covert Growth Ops",
                content: "Stealth marketing tactics that create organic hype without appearing forced",
                icon: <Eye size={32} className="text-spy-gold mb-3" />
              },
              {
                title: "Licensed to Hype",
                content: "Government-grade meme warfare strategies approved for maximum virality",
                icon: <ShieldLock size={32} className="text-spy-gold mb-3" />
              }
            ].map((item, index) => (
              <Col md={4} key={index}>
                <div 
                  className="h-100 p-4 border border-spy-silver/20 rounded-3 bg-spy-dark text-center hover-card"
                  style={{
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ transition: 'transform 0.3s ease' }}>
                    {item.icon}
                  </div>
                  <h4 className="text-spy-gold mb-3 position-relative">
                    {item.title}
                    <span 
                      className="position-absolute bottom-0 left-50 translate-middle-x bg-spy-gold"
                      style={{
                        height: '2px',
                        width: '0',
                        transition: 'width 0.3s ease',
                        transform: 'translateX(-50%)'
                      }}
                    ></span>
                  </h4>
                  <p className="text-spy-silver/80 mb-0">{item.content}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  LightningFill,
  ShieldFill,
  Globe,
  ChatFill,
  BrushFill,
  CodeSquare,
  GraphUp,
  Clock,
  CheckCircleFill,
  ArrowRight
} from 'react-bootstrap-icons';
import CustomNavbar from '../components/Navbar';
import FAQSection from '../components/FAQSection';

const ServicesPage = () => {
  const services = [
    {
      category: "Engagement Ops",
      icon: <LightningFill className="text-gold" />,
      items: [
        "24/7 Twitter Raids & CT Coordination",
        "Reddit Growth Campaigns",
        "Raid Board Trending (Deluge, Cherry)"
      ],
      accent: "gold"
    },
    {
      category: "Community Intel",
      icon: <ChatFill className="text-silver" />,
      items: [
        "Premium Community Management",
        "Chat Engagement Systems",
        "Hype Wave Coordination"
      ],
      accent: "silver"
    },
    {
      category: "Creative Ops",
      icon: <BrushFill className="text-gold" />,
      items: [
        "Luxury-Grade Visual Design",
        "Motion Graphics & Animations",
        "Viral Meme Engineering"
      ],
      accent: "gold"
    },
    {
      category: "Tech Division",
      icon: <CodeSquare className="text-silver" />,
      items: [
        "Bespoke Website Development",
        "Strategic Marketing Blueprints",
        "Launch Protocol Execution"
      ],
      accent: "silver"
    }
  ];

  return (
    <>
      <CustomNavbar />
      
      {/* Minimalist Hero */}
      <section className="min-vh-100 d-flex align-items-center position-relative bg-black">
        <div className="position-absolute top-0 end-0 w-50 h-100 bg-gradient-gold opacity-10"></div>
        
        <Container className="position-relative z-10">
          <Row className="py-5">
            <Col lg={6} className="pe-lg-5">
              <h6 className="text-silver mb-3 letter-spacing-2">
                <ShieldFill className="me-2" /> 007PRO SERVICES
              </h6>
              <h1 className="display-4 fw-light text-white mb-4">
                <span className="text-gold">Licensed</span> Crypto Growth Solutions
              </h1>
              <p className="lead text-silver mb-5">
                Classified marketing protocols for elite meme projects. 
                No hype—just measurable results.
              </p>
              <Button 
                variant="outline-light" 
                className="btn-glass border-gold text-gold px-4 py-3"
              >
                Request Dossier <ArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid - Q Branch Style */}
      <section className="py-5 bg-dark">
        <Container>
          <Row className="justify-content-center mb-6">
            <Col lg={8} className="text-center">
              <h6 className="text-silver mb-3 letter-spacing-2">OPERATIONAL MODULES</h6>
              <div className="divider-line mx-auto bg-gold my-4"></div>
              <h2 className="display-5 fw-light text-white mb-4">
                <span className="text-gold">Precision</span> Marketing Instruments
              </h2>
            </Col>
          </Row>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={6} key={index}>
                <div className={`service-module bg-${service.accent}-fade p-4 p-lg-5 h-100`}>
                  <div className="d-flex align-items-start">
                    <div className={`icon-wrapper bg-${service.accent}-soft me-4`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-${service.accent} mb-4`}>{service.category}</h3>
                      <ul className="list-unstyled">
                        {service.items.map((item, i) => (
                          <li key={i} className="d-flex mb-3">
                            <CheckCircleFill className={`text-${service.accent} me-3 mt-1`} />
                            <span className="text-silver">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Value Proposition - Mission Briefing Style */}
<section className="py-5 bg-black position-relative">
  <div className="position-absolute top-0 start-0 w-100 h-100 bg-grid-pattern opacity-10"></div>
  
  <Container className="position-relative z-10">
    <Row className="justify-content-center mb-6">
      <Col lg={8} className="text-center">
        <div className="divider-line mx-auto bg-gold my-4"></div>
        <h2 className="display-5 fw-light text-white mb-4">
          <span>Why Choose</span> <span className="text-spy-gold">007</span>
          <span className="text-spy-silver">pro?</span>
        </h2>
      </Col>
    </Row>
    
    <Row className="g-4">
      {[
        {
          title: "PROven Results",
          text: "Trusted by top Meme Projects on the Blockchain",
          icon: <GraphUp />
        },
        {
          title: "Always Online",
          text: "24/7 coverage means non-stop hype on CT",
          icon: <Clock />
        },
        {
          title: "Tailored Services",
          text: "Everything custom to your brand and project tone",
          icon: <BrushFill />
        },
        {
          title: "Bond-Level Delivery",
          text: "You don't just get service—you get RESULTS",
          icon: <ShieldFill />
        }
      ].map((item, index) => (
        <Col lg={3} md={6} key={index}>
          <div className="value-card p-4 h-100">
            <div className="text-gold mb-4" style={{ fontSize: '2rem' }}>
              {item.icon}
            </div>
            <h4 className="text-white mb-3">{item.title}</h4>
            <p className="text-silver mb-0">{item.text}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
{/* Add FAQ Section Here */}
<FAQSection />
      
    </>
  );
};

export default ServicesPage;
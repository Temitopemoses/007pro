import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { 
  EnvelopeFill,
  Telegram,
  Twitter,
  ShieldLockFill,
  ArrowRight,
  GeoAltFill,
  PhoneFill
} from 'react-bootstrap-icons';

const ContactPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
       {/* Animated background elements */}
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20">
          <div className="cyber-grid-overlay"></div>
          <div className="position-absolute top-25 start-25 rounded-circle bg-spy-accent/20 blur-3xl" style={{ width: '24rem', height: '24rem' }}></div>
          <div className="position-absolute bottom-25 end-33 rounded-circle bg-spy-gold/10 blur-3xl" style={{ width: '16rem', height: '16rem' }}></div>
        </div>
      <section className="min-vh-50 d-flex align-items-center position-relative border-bottom border-gold">
        <Container>
          <Row className="py-5">
            <Col lg={6}>
              <h6 className="text-silver mb-3 letter-spacing-2">
                <ShieldLockFill className="me-2" /> SECURE CHANNELS
              </h6>
              <h1 className="display-3 fw-bold text-white mb-4">
                <span className="text-gold">Encrypted</span> Comms
              </h1>
              <p className="lead text-silver">
                All communications secured with 256-bit encryption. 
                Response within 24 hours.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-5 bg-dark">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <div className="contact-method p-4 h-100 border border-gold">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper bg-gold-soft me-3">
                    <Telegram className="text-gold" size={24} />
                  </div>
                  <h4 className="text-gold mb-0">Telegram</h4>
                </div>
                <p className="text-silver mb-3">For immediate response:</p>
                <a href="https://t.me/oo7inc" className="text-gold">@oo7inc</a>
                <div className="mt-3">
                  <small className="text-muted">Operational 24/7</small>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="contact-method p-4 h-100 border border-gold">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper bg-gold-soft me-3">
                    <Twitter className="text-gold" size={24} />
                  </div>
                  <h4 className="text-gold mb-0">Twitter/X</h4>
                </div>
                <p className="text-silver mb-3">For public inquiries:</p>
                <a href="https://twitter.com/oo7nms" className="text-gold">@007PRO</a>
                <div className="mt-3">
                  <small className="text-muted">DM for secure chat</small>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="contact-method p-4 h-100 border border-gold">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper bg-gold-soft me-3">
                    <EnvelopeFill className="text-gold" size={24} />
                  </div>
                  <h4 className="text-gold mb-0">Encrypted Email</h4>
                </div>
                <p className="text-silver mb-3">For formal agreements:</p>
                <a href="mailto:contact@007pro.xyz" className="text-gold">contact@007pro.xyz</a>
                <div className="mt-3">
                  <small className="text-muted">PGP Key Available</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-black">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h6 className="text-silver mb-3 letter-spacing-2">
                <ShieldLockFill className="me-2" /> SECURE FORM
              </h6>
              <div className="divider-line mx-auto bg-gold my-4"></div>
              <h2 className="display-5 fw-light text-white mb-4">
                <span className="text-gold">Mission</span> Briefing Request
              </h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Form className="border border-gold p-4 p-lg-5">
                <Form.Group className="mb-4">
                  <Form.Label className="text-silver">Codename</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Your project name" 
                    className="bg-dark border-gold text-white"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-silver">Encrypted Contact</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Telegram/X/Email" 
                    className="bg-dark border-gold text-white"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-silver">Service Type</Form.Label>
                  <Form.Select className="bg-dark border-gold text-white">
                    <option>Select operation type</option>
                    <option>Community Growth</option>
                    <option>Marketing Strategy</option>
                    <option>Creative Design</option>
                    <option>Full Campaign</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-silver">Mission Details</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Describe your project needs" 
                    className="bg-dark border-gold text-white"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="outline-gold" 
                    size="lg" 
                    className="py-3"
                  >
                    Transmit Briefing <ArrowRight className="ms-2" />
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Additional Info */}
      <section className="py-5 bg-gradient-dark">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <div className="d-flex align-items-center">
                <GeoAltFill className="text-gold me-3" size={24} />
                <div>
                  <h5 className="text-white">Headquarters</h5>
                  <p className="text-silver mb-0">Decentralized Operations</p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="d-flex align-items-center">
                <ShieldLockFill className="text-gold me-3" size={24} />
                <div>
                  <h5 className="text-white">Security Protocol</h5>
                  <p className="text-silver mb-0">All comms encrypted</p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="d-flex align-items-center">
                <PhoneFill className="text-gold me-3" size={24} />
                <div>
                  <h5 className="text-white">Response Time</h5>
                  <p className="text-silver mb-0">Under 24 hours</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
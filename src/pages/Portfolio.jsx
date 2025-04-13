import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { 
  LightningFill,
  RocketFill,
  PaletteFill,
  Images,
  ArrowLeft,
  ArrowRight
} from 'react-bootstrap-icons';

const PortfolioPage = () => {
  const caseStudies = [
    {
      title: "$FOMO (Captain Fomo)",
      description: "From zero to $50K MC in 8 minutes || Stealth Launch",
      details: [
        "Coordinated viral Twitter raid campaign",
        "Designed stealth launch strategy",
        "Managed CT hype waves pre/post-launch",
        "Result: 500+ holders in first hour"
      ],
      icon: <LightningFill className="text-gold" size={48} />
    },
    {
      title: "$SQUIDGUY CTO",
      description: "Full website + raid management for NFT mint",
      details: [
        "Designed and developed custom minting site",
        "Created viral meme assets",
        "Managed raid coordination teams",
        "Result: 2.4 ETH volume first 24h"
      ],
      icon: <RocketFill className="text-gold" size={48} />
    }
  ];

  const graphics = [
    { id: 1, alt: "Meme Design 1", type: "meme" },
    { id: 2, alt: "Website Design", type: "website" },
    { id: 3, alt: "Banner Design", type: "banner" },
    { id: 4, alt: "Motion Graphic", type: "animation" },
    { id: 5, alt: "NFT Artwork", type: "nft" },
    { id: 6, alt: "Twitter Header", type: "social" }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-vh-50 d-flex align-items-center position-relative border-bottom border-gold">
        <Container>
          <Row className="py-5">
            <Col lg={6}>
              
              <h1 className="display-3 fw-bold text-white mb-4">
                <span className="text-gold">Covert</span> Operations Archive
              </h1>
              <p className="lead text-silver">
                Classified results from previous missions. All data sanitized for public release.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="py-5 bg-dark">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h6 className="text-silver mb-3 letter-spacing-2">CLASSIFIED RESULTS</h6>
              <div className="divider-line mx-auto bg-gold my-4"></div>
              <h2 className="display-5 fw-light text-white mb-4">
                <span className="text-gold">Mission</span> Case Studies
              </h2>
            </Col>
          </Row>

          <Row className="g-4">
            {caseStudies.map((study, index) => (
              <Col lg={6} key={index}>
                <div className="case-study bg-black-fade p-4 p-lg-5 h-100 border border-gold">
                  <div className="d-flex align-items-start mb-4">
                    <div className="me-4">
                      {study.icon}
                    </div>
                    <div>
                      <h3 className="text-gold mb-2">{study.title}</h3>
                      <p className="text-silver mb-4">{study.description}</p>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    {study.details.map((detail, i) => (
                      <li key={i} className="d-flex mb-3">
                        <span className="text-gold me-3">▸</span>
                        <span className="text-silver">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Graphics Gallery */}
      <section className="py-5 bg-black">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h6 className="text-silver mb-3 letter-spacing-2">
                <Images className="me-2" /> VISUAL ASSETS
              </h6>
              <div className="divider-line mx-auto bg-gold my-4"></div>
              <h2 className="display-5 fw-light text-white mb-4">
                <span className="text-gold">Graphics</span> & Animations
              </h2>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="mx-auto">
              <Carousel 
                indicators={false}
                prevIcon={<ArrowLeft size={24} className="text-gold" />}
                nextIcon={<ArrowRight size={24} className="text-gold" />}
                interval={3000}
              >
                {graphics.map((graphic) => (
                  <Carousel.Item key={graphic.id}>
                    <div className="graphic-preview bg-dark d-flex align-items-center justify-content-center p-5">
                      <div className="placeholder-graphic text-silver text-center">
                        <Images size={48} className="mb-3" />
                        <h5>{graphic.alt}</h5>
                        <small className="text-muted">(Sample preview - actual work shown to clients)</small>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="p-4 p-lg-5 bg-dark border-top border-gold">
                <h3 className="display-6 text-white mb-4">
                  Ready to <span className="text-gold">declassify</span> your success?
                </h3>
                <p className="text-silver mb-5">
                  Contact for full portfolio access and mission briefing.
                </p>
                <button className="btn btn-outline-gold px-5 py-3">
                  Request Full Dossier <ArrowRight className="ms-2" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PortfolioPage;
import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do we start?",
      answer: "Choose a specific service, order type and copy-paste the exact order code to @oo7inc or @oo7nms on Telegram or X."
    },
    {
      question: "Do you offer one-time or ongoing services?",
      answer: "OO7PRO is available for both Ongoing and One-time Services."
    },
    {
      question: "Can you help with pre-launch and post-launch strategies?",
      answer: "Absolutely! We offer organic shilling services to provide a filled up group for prelaunch hypes and paid marketing approaches for post launch services. Custom demands are available as well."
    },
    {
      question: "What blockchain projects do you support?",
      answer: "All blockchain projects currently including Solana, Binance, Ethereum, Avalanche, Polygon, Base, Cardano etc."
    }
  ];

  return (
    <section className="py-5 bg-dark" id="faq">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h6 className="text-silver mb-3 letter-spacing-2">
              <QuestionCircle className="me-2" /> FREQUENTLY ASKED
            </h6>
            <div className="divider-line mx-auto bg-gold my-4"></div>
            <h2 className="display-5 fw-light text-white mb-4">
              <span className="text-gold">Operational</span> Intelligence
            </h2>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="mx-auto">
            <Accordion flush className="faq-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item 
                  eventKey={index.toString()} 
                  key={index}
                  className="bg-black border-0 mb-3 overflow-hidden"
                >
                  <Accordion.Header className="bg-dark">
                    <h5 className="text-gold mb-0">{faq.question}</h5>
                  </Accordion.Header>
                  <Accordion.Body className="bg-black text-silver">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
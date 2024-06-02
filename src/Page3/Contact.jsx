import { faEnvelope, faFax, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/footer';
import '../index.css';
const ContactPage = () => {
  return ( 
  <>
    <br/>
    <br/>
    <br/>
    <i className='coordonne'>Nos Coordonnees</i>
    <br/>
    <br/>
    <br/>
    <Container>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>123 Casablanca Maroc</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faPhone} />
          <p>+212 456 789 00</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>hotel@gmail.com</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faFax} />
          <p>+212 456 789</p>
        </Col>
      </Row>
    </Container>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default ContactPage;

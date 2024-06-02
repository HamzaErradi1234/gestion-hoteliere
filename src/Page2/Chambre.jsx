import { faBed, faEuroSign, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/footer';
import imgch1 from '../Header/chambre1.png';
import imgch10 from '../Header/chambre10.png';
import imgch11 from '../Header/chambre11.png';
import imgch12 from '../Header/chambre12.png';
import imgch2 from '../Header/chambre2.png';
import imgch3 from '../Header/chambre3.png';
import imgch4 from '../Header/chambre4.png';
import imgch5 from '../Header/chambre5.png';
import imgch6 from '../Header/chambre6.png';
import imgch7 from '../Header/chambre7.png';
import imgch8 from '../Header/chambre8.png';
import imgch9 from '../Header/chambre9.png';
import CustomSpinner from '../Spinner/Spinner';

function ChambreCard({ imgSrc, price, description, type }) {
  return (
    <Col>
      <Card style={{ width: '18rem' }} className="card-margin col-12 col-md-6 col-lg-4">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Text>
            <Row>
              <div>
                <FontAwesomeIcon icon={faWifi} />
                <span className="badge bg-secondary text-white ms-2">{description}</span>
              </div>
            </Row>
            <Row>
              <div>
                <FontAwesomeIcon icon={faEuroSign} />
                <span className="badge bg-secondary text-white ms-3">{price}/night</span>
              </div>
            </Row>
            <Row>
              <div>
                <FontAwesomeIcon icon={faBed} />
                <span className="badge bg-secondary text-white ms-2">{type}</span>
              </div>
            </Row>
            <Row className="mt-3">
              <Col>
                <Link to="/addreservation">
                  <Button variant="primary">Reserver</Button>
                </Link>
              </Col>
              <Col>
                <Link to="/chambre-details">
                  <Button variant="primary" className='detailButton'> details</Button>
                </Link>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
function Chambre() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const chambres = [
    { imgSrc: imgch4, price: "200", description: "Connexion Gratuite", type: "deux lits simple" },
    { imgSrc: imgch7, price: "300", description: "Connexion Gratuite", type: "deux lits simple" },
    { imgSrc: imgch3, price: "100", description: "Connexion Gratuite", type: "double" },
    { imgSrc: imgch1, price: "120", description: "Connexion Gratuite", type: "double" },
    { imgSrc: imgch5, price: "150", description: "Connexion Gratuite", type: "deux lits simple" },
    { imgSrc: imgch6, price: "90", description: "Connexion Gratuite", type: "double" },
    { imgSrc: imgch2, price: "250", description: "Connexion Gratuite", type: "double" },
    { imgSrc: imgch8, price: "280", description: "Connexion Gratuite", type: "deux lits simple" },
    { imgSrc: imgch9, price: "210", description: "Connexion Gratuite", type: "double" },
    { imgSrc: imgch10, price: "180", description: "Connexion Gratuite", type: "double" },
    { imgSrc: imgch11, price: "270", description: "Connexion Gratuite", type: "deux lits simple" },
    { imgSrc: imgch12, price: "190", description: "Connexion Gratuite", type: "double" },
  ];
  const filteredChambres = chambres.filter(chambre =>
    chambre.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useState(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <Container>
        <Form.Group controlId="formSearch" className='col-md-6 mx-auto'>
          <Form.Control
            type="text"
            placeholder="Rechercher..."
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        <Row>
          {isLoading ? (
            <CustomSpinner />
          ) : (
            filteredChambres.map((chambre, index) => (
              <ChambreCard
                key={index}
                imgSrc={chambre.imgSrc}
                price={chambre.price}
                description={chambre.description}
                type={chambre.type}
              />
            ))
          )}
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Chambre;

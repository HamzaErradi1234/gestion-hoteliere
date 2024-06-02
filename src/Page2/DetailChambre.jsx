import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgSrc from '../Header/bain.png';
import imgSrc2 from '../Header/bain2.png';
import imgSrc3 from '../Header/bain3.png';

function DetailsChambre() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            {/* Utilisation de positionnement relatif sur le conteneur de l'image */}
            <div style={{ position: 'relative' }}>
              {/* Carrousel des images */}
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100"   src={imgSrc} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={imgSrc2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={imgSrc3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              {/* Positionnement absolu des étoiles par rapport à l'image */}
              <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <span role="img" aria-label="Étoiles">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
            <Card.Body>
              <Card.Text>
                <div>
                 <p>Cette chambre se distingue par une salle de bain équipée des dernières technologies modernes, offrant ainsi un confort optimal à ses occupants. De plus, son design élégant et ses installations haut de gamme garantissent une expérience luxueuse et relaxante.</p>
                </div>
              </Card.Text>
              <Link to="/chambre">
                <Button variant="primary">Retour</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailsChambre;

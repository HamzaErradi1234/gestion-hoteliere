import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Administrateur() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/administrateurs/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      setShowModal(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Les informations saisies ne sont pas correctes.');
    }
  };

  // const handleSignup = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:8080/administrateurs/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         email: email,
  //         password: password,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Registration failed');
  //     }

  //     setShowModal(true);
  //     setErrorMessage('');
  //   } catch (error) {
  //     setErrorMessage('La création du compte a échoué. Veuillez réessayer.');
  //   }
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username :</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Entrer non utilisateur" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email :</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Entrer email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password :</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Entrer
            </Button>
          </Form>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <Link to="/listereservation">Liste des réservations</Link>
          <br />
          <Link to="/ClientList">Liste des clients</Link>
          <br />
          <Link to="/addChambre">Liste des chambres</Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Administrateur;

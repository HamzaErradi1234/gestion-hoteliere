import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const AddReservation = ({ addReservation }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [payment, setPayment] = useState('');
  const inscriptions = useSelector(state => state.clients);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage('');
    setAlertVariant('success');

    if (!email || !password || !dateDebut || !dateFin || !payment) {
      setAlertVariant('danger');
      setAlertMessage("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    if (new Date(dateDebut) >= new Date(dateFin)) {
      setAlertVariant('danger');
      setAlertMessage("La date de début doit être inferieur à la date de fin.");
      return;
    }

    try {
      const newReservation = { email, password, dateDebut, dateFin, payment };
      await addNewReservation(newReservation);
      setAlertMessage(`Votre réservation a été confirmée avec succès. Paiement reçu : ${payment}`);
      setEmail('');
      setPassword('');
      setDateDebut('');
      setDateFin('');
      setPayment('');
    } catch (error) {
      setAlertVariant('danger');
      setAlertMessage("Une erreur de reservation.");
      console.error(error);
    }
  };

  const addNewReservation = async (newReservation) => {
    await axios.post("http://localhost:8080/reservations/add", newReservation);
    addReservation(newReservation);
  };

  const checkEmailAndPassword = (email, password) => {
    const existingInscription = inscriptions.find(inscription => inscription.email === email && inscription.password === password);
    return existingInscription ? true : false;
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} md={6}>
          <Form onSubmit={handleSubmit}>
            {alertMessage && (
              <div className={`alert alert-${alertVariant}`} role="alert">
                {alertMessage}
              </div>
            )}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
            </Form.Group>

            <Form.Group controlId="formBasicDateDebut">
              <Form.Label>Date de début</Form.Label>
              <Form.Control type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} placeholder="Date de début" />
            </Form.Group>

            <Form.Group controlId="formBasicDateFin">
              <Form.Label>Date de fin</Form.Label>
              <Form.Control type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} placeholder="Date de fin" />
            </Form.Group>

            <Form.Group controlId="formBasicPayement">
              <Form.Label>Paiement</Form.Label>
              <Form.Control type="text" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="Montant payé" />
            </Form.Group>

            <Button variant="primary" type="submit" className='btnRes'>Confirmer</Button>
            <Link to="/chambre">
              <Button variant="primary" className='btnRes ms-4'>Annuler</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddReservation;

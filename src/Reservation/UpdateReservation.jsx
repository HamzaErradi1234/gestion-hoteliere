import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

function UpdateReservation({ reservation, onModification }) {
    const [email, setEmail] = useState(reservation ? reservation.email : '');
    const [password, setPassword] = useState(reservation ? reservation.password : '');
    const [dateDebut, setDateDebut] = useState(reservation ? reservation.dateDebut : '');
    const [dateFin, setDateFin] = useState(reservation ? reservation.dateFin : '');
    const [payment, setPayment] = useState(reservation ? reservation.payment : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password && dateDebut && dateFin && payment) {
            const reservationModifiee = {
                id: reservation.id,
                email,
                password,
                dateDebut,
                dateFin,
                payment
            };
            try {
                await onModification(reservationModifiee);
                toast.success("Réservation mise à jour avec succès !");
            } catch (error) {
                toast.error("Une erreur s'est produite lors de la mise à jour de la réservation.");
                console.error("Erreur lors de la mise à jour de la réservation :", error);
            }
        } else {
            toast.error("Veuillez remplir tous les champs.");
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={10} md={6}>
                    <Form onSubmit={handleSubmit}>
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
                        <Form.Group controlId="formBasicPayment">
                            <Form.Label>Paiement</Form.Label>
                            <Form.Control type="text" value={payment} onChange={(e) => setPayment(e.target.value)} placeholder="Montant payé" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='btnRes'>Mettre à jour</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateReservation;

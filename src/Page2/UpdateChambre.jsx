import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";

function UpdateChambre({ chambre, onModification }) {
  const [prix, setPrix] = useState(chambre.prix);
  const [description, setDescription] = useState(chambre.description);
  const [typeLit, setTypeLit] = useState(chambre.typeLit);

  const handleModificationChambre = () => {
    if (prix && description && typeLit) {
      const chambreModifiee = {
        id: chambre.id,
        photo: chambre.photo,
        prix,
        description,
        typeLit
      };
      onModification(chambreModifiee);
    } else {
      toast.error("Veuillez remplir tous les champs.");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <div className="update-chambre-form">
        <h3>Modifier la chambre</h3>
        <Form>
          <Form.Group controlId="formPrix">
            <Form.Label>Prix:</Form.Label>
            <Form.Control type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formTypeLit">
            <Form.Label>Type de lit:</Form.Label>
            <Form.Control type="text" value={typeLit} onChange={(e) => setTypeLit(e.target.value)} />
          </Form.Group>
          <Button variant="success" className="btnEn" onClick={handleModificationChambre}>Enregistrer</Button>
        </Form>
      </div>
    </Container>
  );
}

export default UpdateChambre;



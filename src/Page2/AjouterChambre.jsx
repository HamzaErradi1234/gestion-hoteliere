import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function AjouterChambreForm({ onChambreAjoutee }) {
  const [photo, setPhoto] = useState(null);
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [typeLit, setTypeLit] = useState('');

  const handleAjouterChambre = () => {
    const nouvelleChambre = {
      photo,
      prix,
      description,
      typeLit
    };
    onChambreAjoutee(nouvelleChambre);
    setPhoto(null);
    setPrix('');
    setDescription('');
    setTypeLit('');
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file" onChange={e => setPhoto(e.target.files[0])} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prix</Form.Label>
        <Form.Control type="text" value={prix} onChange={e => setPrix(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Type de lit</Form.Label>
        <Form.Control type="text" value={typeLit} onChange={e => setTypeLit(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={handleAjouterChambre}>Ajouter</Button>
    </Form>
  );
}

export default AjouterChambreForm;

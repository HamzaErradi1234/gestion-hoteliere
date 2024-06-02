import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import img13 from "../Header/img13.png";
import img14 from "../Header/img14.png";
import img15 from "../Header/img15.png";
import img16 from "../Header/img16.png";
import img17 from "../Header/img17.png";
import img19 from "../Header/img19.png";
import img20 from "../Header/img20.png";
import img21 from "../Header/img21.png";

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UpdateChambre from './UpdateChambre';

function AddChambre() {
  const [chambres, setChambres] = useState([
    { id: 1, photo: img14, prix: "200", description: "Connexion Gratuite", typeLit: "double" },
    { id: 2, photo: img15, prix: "300", description: "Connexion Gratuite", typeLit: "ddouble" },
    { id: 3, photo: img16, prix: "100", description: "Connexion Gratuite", typeLit: "double" },
    { id: 4, photo: img13, prix: "590", description: "Connexion Gratuite", typeLit: "double" },
    { id: 5, photo: img17, prix: "1000", description: "Connexion Gratuite", typeLit: "deux lits simple" },
    { id: 6, photo: img19, prix: "1800", description: "Connexion Gratuite", typeLit: "double" },
    { id: 7, photo: img20, prix: "2990", description: "Connexion Gratuite", typeLit: "double" },
    { id: 8, photo: img21, prix: "2440", description: "Connexion Gratuite", typeLit: "double" },
  ]);

  const [chambreEnCoursDeModification, setChambreEnCoursDeModification] = useState(null);
  const [afficherFormulaireModification, setAfficherFormulaireModification] = useState(false);

  const handleModificationChambre = (chambreModifiee) => {
    const index = chambres.findIndex(chambre => chambre.id === chambreModifiee.id);
    if (index !== -1) {
      const nouvellesChambres = [...chambres];
      nouvellesChambres[index] = chambreModifiee;
      setChambres(nouvellesChambres);
      setAfficherFormulaireModification(false);
      toast.success("Chambre modifiée avec succès !");
    } else {
      toast.error("La chambre à modifier n'existe pas.");
    }
  };

  const supprimerChambre = (id) => {
    const nouvellesChambres = chambres.filter(chambre => chambre.id !== id);
    setChambres(nouvellesChambres);
    toast.success("Chambre supprimée avec succès !");
  };

  const modifierChambre = (chambre) => {
    setChambreEnCoursDeModification(chambre);
    setAfficherFormulaireModification(true);
  };

  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col>
        <br/>
        <br/>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Type de lit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {chambres.map((chambre) => (
                <tr key={chambre.id}>
                  <td>{chambre.id}</td>
                  <td><img src={chambre.photo} alt="Chambre" style={{ width: '50px', height: '50px' }} /></td>
                  <td>{chambre.description}</td>
                  <td>{chambre.prix}</td>
                  <td>{chambre.typeLit}</td>
                  <td>
                    <Button variant="danger" onClick={() => supprimerChambre(chambre.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>{' '}
                    <Button variant="info" onClick={() => modifierChambre(chambre)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
      {afficherFormulaireModification && (
        <UpdateChambre chambre={chambreEnCoursDeModification} onModification={handleModificationChambre} />
      )}
    </Container>
  );
}

export default AddChambre;

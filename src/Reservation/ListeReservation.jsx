import axios from 'axios'; // Import Axios
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const ListeReservation = ({ reservations, deleteReservation, editReservation }) => {
  const { id } = useParams();

  const handleDelete = async (id) => {
    try {
      // Envoyer une requête DELETE à votre API backend
      await axios.delete(`http://localhost:8080/reservation/delete/${id}`);
      // Si la suppression est réussie, appeler la fonction de suppression locale
      deleteReservation(id);
    } catch (error) {
      console.error('Erreur  de la suppression de la réservation : ', error);
    }
  };

  const handleEdit = (reservation) => {
    editReservation(reservation);
  };

  return (
    <div className='container'>
      <div className="row justify-content-center">
      <h2 className='phrase1'>Liste des Réservations</h2>
      <Link to="/addreservation">
        <Button variant="dark">+</Button>
      </Link>
      <Table striped bordered hover className='listeR'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Mot de passe</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Paiement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{reservation.email}</td>
              <td>{reservation.password}</td>
              <td>{reservation.dateDebut}</td>
              <td>{reservation.dateFin}</td>
              <td>{reservation.payment}</td>
              <td>
                <Link to={`/updatereservation/${index+1}`}>
                  <FaEdit className="action-icon edit-icon" onClick={() => handleEdit(reservation)} />
                </Link>
                <FaTrash
                  className="action-icon delete-icon"
                  onClick={() => handleDelete(index + 1)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default ListeReservation;

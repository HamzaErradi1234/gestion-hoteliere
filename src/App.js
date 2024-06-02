// App.jsx

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClientList from './Composant/ClientList';
import UpdateClient from './Composant/UpdateClient';
import Inscription from './Formulaire/inscription';
import Administrateur from './Header/Administration';
import Header from './Header/header';
import Acceuil from './Page1/acceuil';
import AddChambre from './Page2/AddChambre';
import Chambre from './Page2/Chambre';
import DetailsChambre from './Page2/DetailChambre';
import Contact from './Page3/Contact';
import AddReservation from './Reservation/AddReservation';
import ListeReservation from './Reservation/ListeReservation';
import UpdateReservation from './Reservation/UpdateReservation';
import './index.css';

function App() {
  const [reservations, setReservations] = useState([]);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddReservation = (newReservation) => {
    setReservations([...reservations, newReservation]);
  };

  const handleDeleteReservation = (id) => {
    const updatedReservations = reservations.filter(reservation => reservation.id !== id);
    setReservations(updatedReservations);
    toast.success("Réservation supprimée avec succès !");
  };

  const handleEditReservation = (updatedReservation) => {
    const updatedReservations = reservations.map(reservation => {
      if (reservation.id === updatedReservation.id) {
        return updatedReservation;
      } else {
        return reservation;
      }
    });
    setReservations(updatedReservations);
    toast.success("Réservation mise à jour avec succès !");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Acceuil />} />
          <Route path='/addChambre' element={<AddChambre />} />
          <Route path='/chambre' element={<Chambre />} />
          <Route path='/chambre-details' element={<DetailsChambre />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/administrateur' element={<Administrateur />} />
          <Route path='/ClientList' element={<ClientList clients={clients} />} />
          <Route path='/inscription' element={<Inscription addClient={setClients} />} />
          <Route path='/addreservation' element={<AddReservation addReservation={handleAddReservation} />} />
          <Route path='/listereservation' element={<ListeReservation reservations={reservations} deleteReservation={handleDeleteReservation} editReservation={handleEditReservation} />} />
          <Route path='/updatereservation/:id' element={<UpdateReservation />} />
          <Route path='/update-client/:id' element={<UpdateClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
import axios from 'axios'; // Importez Axios
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteClientAction } from '../Config/actions';

function ClientList() {
  
    const clients = useSelector(state => state.clients);
    const dispatch = useDispatch();
    const deleteClient = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/client/delete/${id}`);
            dispatch(deleteClientAction(id));
            console.log("Client supprime avec succes !");
        } catch (error) {
            console.error("Une erreur de la suppression du client :", error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <p>
                        <Link to="/inscription">
                            <button className="btn btn-primary">+</button>
                        </Link>
                    </p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Mot de passe</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.nom}</td>
                                    <td>{client.prenom}</td>
                                    <td>{client.email}</td>
                                    <td>{client.password}</td>
                                    <td>
                                        <Link to={`/update-client/${client.id}`}>
                                            <FaEdit className="action-icon edit-icon" />
                                        </Link>
                                        <FaTrash className="action-icon delete-icon" onClick={() => deleteClient(client.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ClientList;

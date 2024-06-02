import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateClientAction } from '../Config/actions';

function UpdateClient() {
    const { id } = useParams();
    const clients = useSelector(state => state.clients);
    const client = clients.find(client => client.id === parseInt(id));

    const [nom, setNom] = useState(client.nom);
    const [prenom, setPrenom] = useState(client.prenom);
    const [email, setEmail] = useState(client.email);
    const [password, setPassword] = useState(client.password);
    const [acceptAllConditions, setAcceptAllConditions] = useState(false);
    const [errors, setErrors] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        acceptAllConditions: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!client) {
            navigate('/ClientList');
        }
    }, [client, navigate]);

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (nom.trim() === '') {
            newErrors.nom = 'Champ requis';
            isValid = false;
        }

        if (prenom.trim() === '') {
            newErrors.prenom = 'Champ requis';
            isValid = false;
        }

        if (email.trim() === '') {
            newErrors.email = 'Champ requis';
            isValid = false;
        } else if (!email.match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Email incorrect';
            isValid = false;
        } else if (clients.some(c => c.email === email && c.id !== parseInt(id))) {
            newErrors.email = 'Email déjà utilisé';
            isValid = false;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (password.trim() === '') {
            newErrors.password = 'Champ requis';
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial';
            isValid = false;
        }

        if (!acceptAllConditions) {
            newErrors.acceptAllConditions = 'Veuillez accepter les conditions';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            try {
                const updatedClient = {
                    id: parseInt(id),
                    nom,
                    prenom,
                    email,
                    password,
                };
                await axios.put(`http://localhost:8080/client/update/${id}`, updatedClient);
                toast.success("Client mis à jour avec succès !");
                dispatch(updateClientAction(updatedClient));
                navigate('/ClientList');
            } catch (error) {
                toast.error("Une erreur de la modification du client.");
                console.error(error);
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center inscr">Modification</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicNom">
                            <Form.Label>Nom</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" placeholder="Entrer votre nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                                <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                            </InputGroup>
                            <Form.Text className="text-danger">{errors.nom}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPrenom">
                            <Form.Label>Prénom</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" placeholder="Entrer votre prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                                <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                            </InputGroup>
                            <Form.Text className="text-danger">{errors.prenom}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <Form.Control type="email" placeholder="Entrer votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <InputGroup.Text><AiOutlineMail /></InputGroup.Text>
                            </InputGroup>
                            <Form.Text className="text-danger">{errors.email}</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <InputGroup.Text><AiOutlineLock /></InputGroup.Text>
                            </InputGroup>
                            <Form.Text className="text-danger">{errors.password}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accepter les conditions" checked={acceptAllConditions} onChange={(e) => setAcceptAllConditions(e.target.checked)} />
                            <Form.Text className="text-danger">{errors.acceptAllConditions}</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enregistrer
                        </Button>
                    </Form>
                    <p className="mt-3 text-center">Annuler ? <Link to="/ClientList">Retour à la liste des clients</Link></p>
                </div>
            </div>
        </div>
    );
}

export default UpdateClient;

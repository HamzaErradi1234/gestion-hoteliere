import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addClientAction } from "../Config/actions";

function Inscription() {
    const count = useSelector(data => data.clients.length);
    const clients = useSelector(data => data.clients);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        acceptAllConditions: false
    });

    const [errors, setErrors] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        acceptAllConditions: ''
    });

    useEffect(() => {
        const storedClient = JSON.parse(localStorage.getItem('storedClient'));
        if (storedClient) {
            setFormData(storedClient);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormValid = validateForm();

        if (isFormValid) {
            const isEmailUsed = clients.some(client => client.email === formData.email);

            if (isEmailUsed) {
                toast.error("Cet e-mail est déjà utilisé");
            } else {
                const newClient = {
                    id: count + 1,
                    nom: formData.nom,
                    prenom: formData.prenom,
                    email: formData.email,
                    password: formData.password,
                };

                dispatch(addClientAction(newClient));

                try {
                    await axios.post("http://localhost:8080/client/add", newClient);
                    toast.success("Le compte est créé avec succès");
                    resetForm();
                } catch (error) {
                    toast.error("Le client n'a pas été ajouté");
                    console.error(error);
                }
            }
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (formData.nom.trim() === '') {
            newErrors.nom = 'Champ requis';
            isValid = false;
        }

        if (formData.prenom.trim() === '') {
            newErrors.prenom = 'Champ requis';
            isValid = false;
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Champ requis';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email invalide';
            isValid = false;
        }

        if (formData.password.trim() === '') {
            newErrors.password = 'Champ requis';
            isValid = false;
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/.test(formData.password)) {
            newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial';
            isValid = false;
        }

        if (!formData.acceptAllConditions) {
            newErrors.acceptAllConditions = 'Veuillez accepter les conditions';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const resetForm = () => {
        setFormData({
            nom: '',
            prenom: '',
            email: '',
            password: '',
            acceptAllConditions: false
        });
    };

    useEffect(() => {
        localStorage.setItem('storedClient', JSON.stringify(formData));
    }, [formData]);

    return (
        <div className="container">
            <div className="row justify-content-center">
        <div className="col-md-6">
                    <h2 className="text-center inscr">Inscription</h2>
                    <ToastContainer position="top-center" className="center-toast" />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicNom">
                            <Form.Label>Nom</Form.Label>
                            <div className="input-group">
                                <Form.Control type="text" placeholder="Entrer votre nom" name="nom" value={formData.nom} onChange={handleChange} />
                                <span className="input-group-text"><AiOutlineUser /></span>
                            </div>
                            <Form.Text className="text-danger">{errors.nom}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPrenom">
                            <Form.Label>Prénom</Form.Label>
                            <div className="input-group">
                                <Form.Control type="text" placeholder="Entrer votre prénom" name="prenom" value={formData.prenom} onChange={handleChange} />
                                <span className="input-group-text"><AiOutlineUser /></span>
                            </div>
                            <Form.Text className="text-danger">{errors.prenom}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <div className="input-group">
                                <Form.Control type="text" placeholder="Entrer votre email" name="email" value={formData.email} onChange={handleChange} />
                                <span className="input-group-text"><AiOutlineMail /></span>
                            </div>
                            <Form.Text className="text-danger">{errors.email}</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <div className="input-group">
                                <Form.Control type="password" placeholder="Mot de passe" name="password" value={formData.password} onChange={handleChange} />
                                <span className="input-group-text"><AiOutlineLock /></span>
                            </div>
                            <Form.Text className="text-danger">{errors.password}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accepter les conditions" name="acceptAllConditions" checked={formData.acceptAllConditions} onChange={handleCheckboxChange} />
                            <Form.Text className="text-danger">{errors.acceptAllConditions}</Form.Text>
                        </Form.Group>
                        <Button variant="info" type="submit">
                            S'inscrire
                        </Button>
                        <Link to="/">
                            <Button variant="info" type="reset" className='ms-5' onClick={resetForm}>
                                Annuler
                            </Button>
                             </Link>
                             </Form>
                               </div>
                          </div>
                       </div>
                      );
                      }
                       export default Inscription;

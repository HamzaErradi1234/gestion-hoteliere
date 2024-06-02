import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import img from '../Header/logo1.png';

function Header() {
    return (
        <>
            <Nav justify variant="tabs" defaultActiveKey="/home" className="b-20">
                <img src={img} width={100} height={100} alt="Logo" className="logo1" />

                <Nav.Item>
                    <Link to="/" className="Nav-Link" eventKey="link-1">
                        <strong className="font-roboto">Accueil</strong>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/chambre" className="Nav-Link" eventKey="link-2">
                        <strong className="font-roboto">Chambre</strong>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/contact" className="Nav-Link" eventKey="link-3">
                        <strong className="font-roboto">Contact</strong>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/inscription">
                        <Button variant="outline-primary">Créer un compte</Button>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/Administrateur">
                        <Button variant="outline-primary">Administration</Button>
                    </Link>
                </Nav.Item>

            
            </Nav>
        </>
    );
}

export default Header;

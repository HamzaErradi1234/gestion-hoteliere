import { faCheckCircle, faChild, faLandmark, faSwimmer, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Footer() {
  return (
    <> 
 <hr/> 
 
          <h4><strong><i className='coordonne'>Notre hôtel offre aux clients :</i></strong></h4>
        
  <Row className="bgcolor">
        <Col className='mb-4'>
          <div className='footer1'>
            <div className="wifi ">
              <FontAwesomeIcon icon={faWifi} className="mr-2 mt-3" />
              <span className="ml-2 span1"><u><i><strong>Internet</strong></i></u></span>
            </div>
            <div className='div3'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span2'>Wi-Fi <b><u id="u1">gratuit</u></b></span>
            </div>
            <div className='div4'>
              <FontAwesomeIcon icon={faLandmark} />
              <span className='span3'><u><i><strong id="service">Service</strong></i></u></span>
            </div>
            <div className='div5'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className="span4">Réception</span> <u id="heure"> 24h/24h</u>
            </div>
            <div className='div6'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span5'>Service complet de blanchisserie</span>
            </div>
            <div className='div7'>
              <FontAwesomeIcon icon={faSwimmer} />
              <span ><u><i><strong id="piscine">Piscine</strong></i></u></span>
            </div>
            <div className='divP'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span6'>Piscine</span>
            </div>
            <div className='divE'>
              <FontAwesomeIcon icon={faChild} />
              <span><u><i><strong id="piscine">Enfant</strong></i></u></span>
            </div>
            <div className='div8'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span7'>Adapté aux enfants</span>
            </div>
          </div>
          <div className='footer2'>
          </div>
        </Col>
        <Col className='mb-4'>
          <div className='footer1'>
            <div className="wifi ">
            <FontAwesomeIcon icon={faUtensils} />
              <span className="ml-2 span1"><u><i><strong>Restaurants</strong></i></u></span>
            </div>
            <div className='div3'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span2'>Restaurant</span>
            </div>
            <div className='div3'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span2'>Service de chambre</span>
            </div>
            <div className='div3'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span2'>Petit-déjeuner <b><u id="u1">gratuit</u></b></span>
            </div>
            <div className='div4'>
              <FontAwesomeIcon icon={faLandmark} />
              <span className='span3'><u><i><strong id="service">Parking et services de transport</strong></i></u></span>
            </div>
            <div className='div3'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span2'>Parking <b><u id="u1">gratuit</u></b></span>
            </div>
            <div className='div3'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span className='span2'>Navette locale</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Footer;

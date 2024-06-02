import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from '../Footer/footer';
import ControlledCarousel from '../carrousel/carrousel';
import '../index.css';

export default function Acceuil() {
  return (<>
    
    <div >
      <marquee scrollamount="20">
      <h1 className={"dispaly-3 custom-font"}>Réservez votre séjour au Château de Luxe</h1>
      </marquee>
      <p className={"dispaly-3 custom-font"}>Plongez dans l'élégance intemporelle et le raffinement d'un château-hôtel de luxe, où chaque instant évoque une atmosphère de conte de fées. Niché au cœur de paysages pittoresques, notre château vous accueille dans un cadre majestueux imprégné d'histoire et de charme. Les tours imposantes et les jardins luxuriants vous invitent à une escapade enchantée, où le temps semble suspendu. Découvrez des chambres somptueusement décorées, alliant un design classique et des équipements modernes, offrant un confort inégalé et une vue imprenable sur la campagne environnante. Notre équipe dévouée est à votre disposition pour vous offrir un service personnalisé et attentif, répondant à tous vos besoins et désirs</p>
    </div>
    <div>
      <ControlledCarousel/>
      </div>
      <br/>
      <div>
        <Footer/>
        </div>
    </>
  );
}

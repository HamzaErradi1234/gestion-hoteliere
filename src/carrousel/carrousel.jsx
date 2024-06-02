import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Header/img1.png";
import img2 from "../Header/img2.png";
import img3 from "../Header/img3.png";
import ExampleCarouselImage from './ExampleCarouselImage';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  
  return ( 
    <Carousel activeIndex={index}  onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide"   imagePath={img1}  />
        <Carousel.Caption>
         
          <h3> Jardin aquatique</h3>
          <p>Éden rafraîchissant, oasis luxuriante.</p>     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imagePath={img2}  />
        <Carousel.Caption>
          <h3>Vue marine</h3>
          <p>Vue panoramique océan hôtel luxueux.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imagePath={img3}   />
        <Carousel.Caption>
          <h3>chambres Élégante</h3>
          <p>
          Luxueuse, spacieuse, confortable, vue panoramique
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
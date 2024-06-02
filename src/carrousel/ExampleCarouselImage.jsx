import React from 'react';
function ExampleCarouselImage({ text ,imagePath}) {
  return (<>
    <div>
      <img
        className="d-block w-100"
        src={imagePath}  
        alt={text}
      /> 
      </div>

   
</>
  );
}

export default ExampleCarouselImage;

import React from 'react';
import { Parallax, Background } from 'react-parallax';
 import Img from '../images/paralax1.jpg';
const MyComponent = () => (
    <div >
     
     <Parallax className="para" 
            bgImage={Img}
  
            strength={600}
            renderLayer={percentage => (
                <div
             
                
                />
            )}
        >
            <p className="bg m-0 p-0"></p>
        </Parallax>
 
      
    </div>
);
export default MyComponent;
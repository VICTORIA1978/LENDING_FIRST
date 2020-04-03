import React from 'react';
import { Parallax, Background } from 'react-parallax';
 import Img from '../images/nevn.jpg';
const MyComponent = () => (
    <div >
     
     <Parallax className="para"
            bgImage={Img}
  
            strength={900}
            renderLayer={percentage => (
                <div
              
                
                />
            )}
        >
            <p className="bg m-0 p-0">... Content</p>
        </Parallax>
 
      
    </div>
);
export default MyComponent;
import React from 'react';
import { Parallax, Background } from 'react-parallax';
 import Img from '../images/fix.jpg';
const MyComponent = () => (
    <div>
     
     <Parallax
            bgImage={Img}
            strength={100}
            renderLayer={percentage => (
                <div
                
                />
            )}
        >
            <p className="bg">... Content</p>
        </Parallax>
 
      
    </div>
);
export default MyComponent;
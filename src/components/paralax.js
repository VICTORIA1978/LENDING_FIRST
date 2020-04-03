import React from 'react';
import { Parallax, Background } from 'react-parallax';
 import Img from '../images/fixn.jpg';
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
            <p className="bg m-0 p-0">... Content</p>
        </Parallax>
 
      
    </div>
);
export default MyComponent;
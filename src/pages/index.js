import React from "react"
import { Row, Col, Container} from "react-bootstrap"
import Modal from "../components/modal"
import Modall from "../components/modal2"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from '../components/GoogleMap'

import Par from "../components/paralax"
import Par2 from "../components/paralax2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram,faFacebookF,faYoutube,faGoogle } from "@fortawesome/free-brands-svg-icons"
import BlockFade from "../components/fade_animation_block"
import BlockFashion from "../components/fashion_block"
import About from "../components/about"
import Youtube from "../components/youtube"

export default  () => {


  return(
  <Layout pageInfo={{ pageName: "index" }}>
  <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
  
  
  <Container  fluid className="">
     <Row className="">
        <Col className="container_overlay_inner  p-0  vh-100     position-relative ">
              <div className="mod_social_block d-flex flex-column mt-3 mr-2  position-fixed">
                    <span className="social  mb-2 d-flex align-items-center justify-content-center text-light "> <FontAwesomeIcon icon={faInstagram} /></span>
                    <span className="social mb-2 d-flex align-items-center justify-content-center text-light"><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span className="social mb-2 d-flex align-items-center justify-content-center text-light"><FontAwesomeIcon icon={faYoutube} /></span>
                    <span className="social mb-2 d-flex align-items-center justify-content-center text-light"><FontAwesomeIcon icon={faGoogle} /></span>
               </div>
               <div className=" style vh-100  w-100 position-absolute "></div>
        <Container>
              <BlockFade/>
        </Container>
        </Col>
     </Row>
  </Container>
  
  <BlockFashion/>
  
  <About/>

  <Youtube/>



  


 
 
 
 
 
 
 
 
  <Container  fluid className="">
    <Row className="">
      <Col className=" position-relative p-0">
      <Par2/>
     
     
      <div className="overlay_fixed position-absolute">
        <div className="d-flex justify-content-center align-items-center h-100">
        <Container  fluid className="  ">
 
          <h3 className="d-flex justify-content-center text-light">СОТРУДНИЧЕСТВО</h3>
       
          <div className="d-flex justify-content-center"> <Modal/></div>
          
         </Container>




        </div>
      </div>
        
     
     
      </Col>
      </Row>
  </Container>

  <Container   className="">
    <Row className="">
      <Col className="mod_slider   my-5 vh-100">
     
        
        
        
        
        
        
        
        
 

      </Col>
      </Row>
  </Container>
 










  
  <Container  fluid className="">
    <Row className="">
      <Col className=" position-relative p-0">
      <Par/>
     
     
      <div className="overlay_fixed position-absolute">
      
        <div className="d-flex justify-content-center align-items-center h-100">
       
        <Container   className="  ">
        
          <h3 className="d-flex justify-content-center text-light">СОТРУДНИЧЕСТВО</h3>
          <p className="d-flex justify-content-center text-center text-light">Доставку разрабатываем совместно, исходя из вашего 
желания и местонахождения.
По предварительной договорённости товар может 
быть доставлен в любую точку Украины, СНГ или Европы.</p>
          <div className="d-flex justify-content-center"><Modall/></div>


       
        
         </Container>



        </div>
      </div>
        
     
     
      </Col>
      </Row>
  </Container>

  <Container  fluid className="p-0">
    <Row className="">
      <Col className="mapss">      
     
      <GoogleMap /> 
     
</Col>
      </Row>
  </Container>
  <Container  fluid className="p-0">
    <Row className="">
      <Col className="foterss">      
     
    
     
</Col>
      </Row>
  </Container>
</Layout>
  )
}



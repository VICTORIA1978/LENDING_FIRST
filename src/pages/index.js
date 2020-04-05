import React from "react"
import { Row, Col, Container,Carousel} from "react-bootstrap"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../images/slide1big.jpg"



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram,faFacebookF,faYoutube,faGoogle } from "@fortawesome/free-brands-svg-icons"
import BlockFade from "../components/fade_animation_block"
import BlockFashion from "../components/fashion_block"
import About from "../components/about"
import Youtube from "../components/youtube"
import Paralax1 from "../components/paralax_first"
import Paralax2 from "../components/paralax_second"
import Map from "../components/map"
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

  <Paralax1/>
 
<Container   className="">
    <Row className="">
      <Col className="mod_slider   my-5 vh-100">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
      </Col>
     </Row>
</Container>
 
<Paralax2/>


<Map/>






  
  

 
  <Container  fluid className="p-0">
    <Row className="">
      <Col className="foterss">      
     
    
     
</Col>
      </Row>
  </Container>
</Layout>
  )
}



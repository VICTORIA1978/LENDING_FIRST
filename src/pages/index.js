import React from "react"
import { Row, Col, Container,Carousel,Caption } from "react-bootstrap"
import Modal from "../components/modal"
import Modall from "../components/modal2"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from '../components/GoogleMap'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram,faFacebookF,faYoutube,faGoogle } from "@fortawesome/free-brands-svg-icons"




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

      </Col>
      <div className=" style vh-100  w-100 position-absolute "></div>
     
      </Row>
  </Container>
  <Container  fluid className="overlay px-3 py-5">
    <Row className="">
      <Col className="col-12 col-sm-4  ">
    
    
    
     <div className="home-hero-column">
       <p>Wedding & Evening Gown by Victoria Simak</p>
     </div>
      </Col>
      <Col className="col-12 col-sm-4 ">
      <div className="home-hero-column">
        <p className="home-hero-link-wrapper">
       <span className="home-hero-link-headline">Discover our</span>
       <span className="home-hero-link-title">Bridal</span>
       </p>
     </div>
      </Col>
      <hr className="hr d-inline d-sm-none"></hr>
      <Col className="col-12 col-sm-4">
      <div className="home-hero-column">
        <p className="home-hero-link-wrapper">
       <span className="home-hero-link-headline">Discover our</span>
       <span className="home-hero-link-title">Bridal</span>
       </p>
     </div>
      </Col>
     
      </Row>
  </Container>
  
  
  
  <Container  fluid className="">
    <Row className="">
      <Col className="about  px-2  py-5 ">
     
     
     
     
     
     
     

     <div className="about_overlay ">
      <p>ФИЛОСОФИЯ БРЕНДА</p>
       <Row className="">
       <Col  className="col-sm-8 ">
       <h3 className="">Мы создаем лучшие свадебные образы</h3>
       </Col>
       <Col className="  col-sm-4 d-md-block d-none  ">
       <h1 className="d-flex justify-content-end d-inline"><span>Logo</span></h1>
       </Col>
       <Col className="col-12 col-sm-5 pl-5  py-5">
      <p > Victoria Simak - это Украинский свадебный 
       бренд. Он основан в 2005 году, а сегодня
        это уже известный производитель,
         отличающийся виртуозной технологической 
         работой со сложными материалами и особым 
         творческим почерком в декоре, по которому 
         можно безошибочно отличить марку от других.</p>
       </Col>
       <Col className="col-12 col-sm-7 pl-sm-5  py-sm-5 ">
       <p className="mb-4">Наша философия основана на следующих 
       принципах: эксклюзивность стиля,
        качество исполнения, клиентоориентированость.
         Платья Victoria Simak созданы для того, 
         чтобы подчеркнуть индивидуальность и
          с помощью платья идеально отразить личность[]
           каждой невесты.</p>
          
         
       </Col>
       </Row>
     </div>
     
     
     
     
     </Col>
</Row>
</Container>




  

  <Container  fluid className="">
    <Row className="">
      <Col className="p-0">
      
      
      
      <div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
        
     
     
     
     
     
     
      </Col>
      </Row>
  </Container>
 
 
 
 
 
 
 
 
  <Container  fluid className="">
    <Row className="">
      <Col className="mod_fixed_block position-relative">
     
     
     
      <div className="overlay_fixed position-absolute">
        <div className="d-flex justify-content-center align-items-center h-100">
        <Container  fluid className="  ">
          <h3 className="d-flex justify-content-center text-light">СОТРУДНИЧЕСТВО</h3>
          <div className="d-flex justify-content-center"><Modal/></div>
         </Container>




        </div>
      </div>
        
     
     
      </Col>
      </Row>
  </Container>

  <Container   className="">
    <Row className="">
      <Col className="mod_slider   my-5">
     
        
        
        
        
        
        
        <Carousel>
  <Carousel.Item>
    <div className="der"></div>
   
  </Carousel.Item>
  <Carousel.Item>
        <div className="der"></div>

    
  </Carousel.Item>
  <Carousel.Item>
  <div className="der"></div>

   
  </Carousel.Item>
</Carousel>
        
 

      </Col>
      </Row>
  </Container>
 










  
  <Container  fluid className="">
    <Row className="">
      <Col className="mod_fixed_block_second position-relative">
     
     
     
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



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
     <div className=" style vh-100  w-100 position-absolute "></div>
     <Container >
       <Row>
         <Col>
     <div className="vh-100  w-100 d-flex align-items-center ">
     <div style={{ marginTop:'0px'}} className="w-100  ">
     <div className="text_fashion d-flex justify-content-start w-100 m-0"><p style={{fontWeight:'400', fontStyle: 'italic', color:'rgb(255, 160, 164)',marginTop:'10px'}}>2020</p></div>
     <div className="text_fashions d-flex justify-content-center w-100"><h1 style={{fontWeight:'100', fontStyle: 'italic',  color:'#ddebff',marginTop:'0px'}}>WEDDING</h1></div>
     <div className="text_normal d-flex justify-content-center w-100"><p style={{fontWeight:'100', fontStyle: 'normal',  color:'#ddebff',marginTop:'0px'}}>COLLECTION</p></div>
     <div className="text_fashion d-flex justify-content-end w-100"><p style={{fontWeight:'400', fontStyle: 'italic', color:'rgb(255, 160, 164)',marginTop:'0px'}}>2021</p></div>
      
      
      </div>
     

      </div>
      </Col>
      </Row>
      </Container>
      </Col>
    
      <div className="vh-100  w-100 position-absolute d-flex align-items-center ">
        <div></div>
      </div>
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
      <p >Victoria Simak - известный бренд, который представляет на мировом рынке эксклюзивные модели свадебных платьев. Мы воплощаем любые вкусы невест - от проверенной временем классики, до самых современных веяний моды.
В разработке платьев используются дорогие ткани разной фактуры и текстуры ведущих европейских производителей, декорированные элементами ручной работы.</p>
       </Col>
       <Col className="col-12 col-sm-7 pl-sm-5  py-sm-5 ">
       <p className="mb-4"> Мы отличаемся внимательным подходом к пожеланиям заказчика, и стремимся выдержать индивидуальный,  неповторимый стиль, который в каждом случае подчёркивает чувственность и индивидуальность, идеально соответствующий образу и характеру невесты.</p>
          
         
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
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/TKZ0QoHuRUk" allowfullscreen></iframe>
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
        <div className="der1"></div>

    
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



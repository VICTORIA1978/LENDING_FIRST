import React from "react"
import { Row, Col, Container} from "react-bootstrap"
import Modall from "./modal"
import Par from "./paralax"



const Paralax2 = () => (






<Container  fluid className="">
    <Row className="">
      <Col className=" position-relative p-0">
      <Par/>
     
     
      <div className="overlay_fixed position-absolute">
      
        <div className="d-flex justify-content-center align-items-center h-100">
       
        <Container   className="  ">
        
          <h3 style={{    color: '#b2b2b2'}} className="d-flex justify-content-center ">СОТРУДНИЧЕСТВО</h3>
          <p style={{fontWeight:'100',     color: '#b2b2b2'}} className="d-flex justify-content-center text-center ">Доставку разрабатываем совместно, исходя из вашего 
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
);
export default Paralax2
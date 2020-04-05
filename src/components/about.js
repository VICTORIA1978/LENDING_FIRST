import React from "react"
import { Row, Col, Container} from "react-bootstrap"










const About = () => (

<Container  fluid className="">
    <Row className="">
         <Col className="about  px-2  py-5  position-relative ">
              <div className="corection position-absolute "></div>
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
                                  <p >Victoria Simak - известный бренд, который 
                                        представляет на мировом рынке эксклюзивные модели свадебных платьев. Мы воплощаем любые вкусы невест - от проверенной временем классики, до самых современных веяний моды.
                                        В разработке платьев используются дорогие ткани
                                         разной фактуры и текстуры ведущих европейских 
                                         производителей, декорированные элементами 
                                         ручной работы.
                                  </p>
                           </Col>
                           <Col className="col-12 col-sm-7 pl-sm-5  py-sm-5 ">
                                   <p className="mb-4"> Мы отличаемся внимательным
                                   одходом к пожеланиям заказчика, и стремимся
                                    выдержать индивидуальный,  неповторимый стиль, 
                                    который в каждом случае подчёркивает 
                                    чувственность и индивидуальность, идеально
                                     соответствующий образу и характеру невесты.
                                  </p>
                           </Col>
                    </Row>
                </div>
           </Col>
     </Row>
</Container>
);
export default About
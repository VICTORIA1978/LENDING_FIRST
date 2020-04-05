import React from "react"
import { Row, Col, Container} from "react-bootstrap"
import Modal from "./modal"
import Par2 from "./paralax2"



const Paralax1 = () => (

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
);
export default Paralax1
import React from "react"
import { Row, Col, Container} from "react-bootstrap"



const Yputube = () => (
<Container  fluid className="">
    <Row className="">
        <Col className="p-0">
           <div class="embed-responsive embed-responsive-16by9">
               <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/TKZ0QoHuRUk" allowfullscreen></iframe>
           </div>
        </Col>
    </Row>
</Container>
);

export default Yputube
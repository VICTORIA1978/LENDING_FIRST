import GoogleMap from './GoogleMap'
import React from "react"
import { Row, Col, Container} from "react-bootstrap"



const Map = () => (
    <Container  fluid className="p-0">
        <Row className="">
             <Col className="mapss">      
                <GoogleMap /> 
             </Col>
        </Row>
    </Container>
);
export default Map
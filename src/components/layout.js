import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import Logo from "../images/Logo.png"
import Text from "../images/Text.png"
import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ data => (
      <>
        <Container fluid  className=" main p-0">
          <Row noGutters className="justify-content-center">
            <Col className="text-center">
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          
          <Container className="" >
            <Navbar pageInfo={pageInfo} />
          </Container>
          
          <Row noGutters>
            <Col>
              <Container fluid={true} className="p-0">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
      
          <Container fluid >
          
    <Row >
    
         
            <Col className="col-12 text-center py-3 bg-dark">
              <div className=" mb-3 " style={{height:'1px', background:'white'}}></div>
              <div>
              <img className="foter_text" src={Logo}/>
              </div>
              <img className="foter_text2" src={Text}/>
              
              </Col>
          
      
    </Row>
   
</Container>
        
      </>
    )}
  />
)

export default Layout

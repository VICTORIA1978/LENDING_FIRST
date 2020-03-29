import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

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
        <Container  className="">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                 {/* © {new Date().getFullYear()}*/}
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout

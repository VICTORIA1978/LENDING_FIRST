import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";









const BlockFade = () => (


                        <div className="vh-100  w-100 d-flex align-items-center ">
                             <div style={{ marginTop:'0px'}} className="w-100  ">
                                  <ScrollAnimation animateIn="fadeInLeft">
                                        <div className="text_fashion d-flex justify-content-start w-100 m-0"><p style={{fontWeight:'400', fontStyle: 'italic', color:'rgb(255, 160, 164)',marginTop:'10px'}}>2020</p></div>
                                  </ScrollAnimation> 
                                  <ScrollAnimation animateIn="fadeIn">
                                       <div className="text_fashions d-flex justify-content-center w-100"><h1 style={{fontWeight:'100', fontStyle: 'italic',  color:'#ddebff',marginTop:'0px'}}>WEDDING</h1></div>
                                       <div className="text_normal d-flex justify-content-center w-100"><p style={{fontWeight:'100', fontStyle: 'normal',  color:'#ddebff',marginTop:'0px'}}>COLLECTION</p></div>
                                   </ScrollAnimation> 
                                   <ScrollAnimation animateIn="fadeInRight">
                                        <div className="text_fashion d-flex justify-content-end w-100"><p style={{fontWeight:'400', fontStyle: 'italic', color:'rgb(255, 160, 164)',marginTop:'0px'}}>2021</p></div>
                                    </ScrollAnimation>
                            </div>
                      </div>
      

);
export default BlockFade
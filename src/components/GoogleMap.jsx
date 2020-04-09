import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram,faFacebookF,faYoutube,faGoogle } from "@fortawesome/free-brands-svg-icons"
const defaultProps = {
  center: {
    lat: 48.291888,
    lng: 25.940761,
  },
  zoom: 15,
}

const AnyReactComponent = ({ text }) => <div className="map" style={{ height: '20px', width: '20px' ,     background:'red',    borderRadius: '1rem'
}}>{text}</div>
const AyReactComponent = ({ text }) => <FontAwesomeIcon style={{   background:'red',    fontSize: '1rem'
}}  >{text}</FontAwesomeIcon>
const GoogleMap = () => (
  <div style={{ height: '60vh', width: '100%' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyD19ds72niNKqjb1LPXDpJNaqL4lmnYjHg' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={48.291888}
        lng={25.940761}
        text={' VS'}
      />
       <AyReactComponent
        lat={48.291888}
        lng={25.940000}
        text={' VS'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap

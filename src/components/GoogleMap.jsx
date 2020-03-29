import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 48.291888,
    lng: 25.940761,
  },
  zoom: 17,
}

const AnyReactComponent = ({ text }) => <div className="map" style={{ height: '20px', width: '20px' ,     background:'#7f7f7f',    borderRadius: '1rem'
}}>{text}</div>
const AyReactComponent = ({ text }) => <div  className="map" style={{ height: '20px', width: '20px' ,     background:'#7f7f7f',   borderRadius: '1rem'}}>{text}</div>
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
        text={' Avsr'}
      />
       <AyReactComponent
        lat={48.291888}
        lng={25.940000}
        text={' Avsr'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
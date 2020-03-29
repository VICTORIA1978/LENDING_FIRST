import React from 'react';
import GoogleMapReact from 'google-map-react';

const isClient = typeof window !== 'undefined';

export const GoogleMap = (props) => {
  const {
    address,
    googleMapsApiKey
  } = props;
  const lat = parseFloat(address.lat);
  const lng = parseFloat(address.lng);
  return (
    <section className="google-map">
      <div className="map">
        { isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD19ds72niNKqjb1LPXDpJNaqL4lmnYjHg'}}
            defaultCenter={[41.8781,-87.6298]}
            defaultZoom={14}
          >
            <div
              className="marker"
              lat={lat}
              lng={lng}
            />
          </GoogleMapReact>
        )}
      </div>
    </section>
  );
}
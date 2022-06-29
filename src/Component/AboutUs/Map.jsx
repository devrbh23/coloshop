import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{lat: 27.703221, lng: 85.312919}}
    >
      {props.isMarkerShown && (
        <Marker position={{lat: 27.703221, lng: 85.312919}} />
      )}
    </GoogleMap>
  ))
);
const Map = () => {
  return (
    <div>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBO-Uw5rxisGkvIJPyHqlAjRc5GuIOeWxQ&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={
          <div
            style={{
              height: '400px',
              width: '50%',
              padding: '30px',
              margin: '10px',
            }}
          />
        }
        mapElement={<div style={{height: `100%`}} />}
      />
    </div>
  );
};

export default Map;

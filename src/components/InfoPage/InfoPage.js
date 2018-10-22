import React from 'react';
import ParkMap from '../ParkMap/ParkMap'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    
      <ParkMap />
      
   
            Parks near you
    
  </div>
);

export default InfoPage;

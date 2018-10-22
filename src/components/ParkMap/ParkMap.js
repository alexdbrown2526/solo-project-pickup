import React, {Component} from 'react'
// import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;


class ParkMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

      //Clicking on a marker will display a piece of information
      //declared in the Marker title

      onMarkerClick = (props, marker) => {
          this.setState({
              showingInfoWindow: true,
              activeMarker: marker,
              selectedPlace: props
          })
      }

      //when a marker infowindow is open, clicking anywhere on
      //the map will close the infowidow
      onMapClick = () => {
          if (this.state.showingInfoWindow) {
              this.setState({
                  showingInfoWindow: false
              })
          }
      }
   

    
        
        
// showCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           this.setState(prevState => ({
//             currentLocation: {
//               ...prevState.currentLocation,
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             },
//             isMarkerShown: true
//           }))
//         }
//       )
//     } else {
//       error => console.log(error)
//     }
//   }

    // componentDidMount(){
    //     this.showCurrentLocation();
    // }



    render(){
        return(
            <Map google={this.props.google}
            onClick={this.onMapClick}
            initialCenter={{
                lat: 44.977753,
                lng: -93.2650108
            }} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <Marker onClick={this.onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'Northeast Park'}
            position={{lat:45.0031, lng: -93.2413}} />
    
            <InfoWindow 
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFhYjFBg61_isW4gz2G1f6ngJRAnLpe_I")
  })(ParkMap)
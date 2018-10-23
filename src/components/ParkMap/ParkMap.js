import React, {Component} from 'react'
// import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './ParkMap.css'
import axios from 'axios'
import Geolocation from 'react-geolocation';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// places apikey: AIzaSyBcMd1o8uQGD7pvA-G9kIYCMHRDvakw50U



class ParkMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

      //CLicking on a marker will show info abouot the location

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

   
      getCurrentLocation = () => {
          navigator.geolcation.getCurrentPosition((position) => {
              console.log(position.coords);
              
          })
      }
        
      getUsers = () => {
          axios({
              method: 'GET',
              url: '/api/username'
          }).then(response => {
              console.log(response);
              
          })
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

//     componentDidMount(){
//         axios ({
//             method: 'GET',
//             url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBcMd1o8uQGD7pvA-G9kIYCMHRDvakw50U',
//             type: ['park'],
//             radius: 10000
//         }).then((results) => {
//             console.log(results);
                
        
//     })
// }

      componentDidMount(){
          this.getUsers();
      }



    render(){
        const style = {
            height: '60vh',
            width: '60vw'
        }
        return(

            
            <Map google={this.props.google}
            style = {style}
            onClick={this.onMapClick}
            initialCenter={{
                lat: 44.977753,
                lng: -93.2650108
            }} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <Marker onClick={this.onMarkerClick}
            name={'Northeast Park'}
            position={{lat:45.0031, lng: -93.2413}}
            />

            <Marker onClick={this.onMarkerClick}
            name={'Van Cleve Park'}
            position={{lat:44.9868, lng: -93.2314}} />


    
            <InfoWindow 
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
                <ul>
                    <li>John</li>
                    <li>George</li>
                </ul>
            </InfoWindow>
           
          </Map>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFhYjFBg61_isW4gz2G1f6ngJRAnLpe_I")
  })(ParkMap)
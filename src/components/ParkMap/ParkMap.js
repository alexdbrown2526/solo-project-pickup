import React, {Component} from 'react'
import {withGoogleMap, withScriptjs, GoogleMap, Marker}  from 'react-google-maps'
import './ParkMap.css'
import ParkMarker from '../ParkMarker/ParkMarker'
import axios from 'axios'
import Geolocation from 'react-geolocation';
import Roster from '../Roster/Roster';

// places apikey: AIzaSyBcMd1o8uQGD7pvA-G9kIYCMHRDvakw50U



 const MapComponent = withScriptjs(withGoogleMap((props) => 
    <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat:44.986656, lng: -93.258133}}>
    {props.isMarkerShown && <Marker position = {{lat: -34.397, lng: 150.644}}/>}
    
    </GoogleMap>
 ))

 
    
class ParkMap extends Component {

    state = {
        isMarkerShown: true
    }
                        
    
    // state = {
    //     showingInfoWindow: false,
    //     activeMarker: {},
    //     selectedPlace: {},
        
    //   };

      //CLicking on a marker will show info about the location

    //   onMarkerClick = (props, marker) => {
    //       this.setState({
    //           showingInfoWindow: true,
    //           activeMarker: marker,
    //           selectedPlace: props
    //       })
    //   }

      //when a marker infowindow is open, clicking anywhere on
      //the map will close the infowidow
    //   onMapClick = () => {
    //       if (this.state.showingInfoWindow) {
    //           this.setState({
    //               showingInfoWindow: false
    //           })
    //       }
    //   }

   
    //   getCurrentLocation = () => {
    //       window.navigator.geolocation.getCurrentPosition((position) => {
    //           console.log(position.coords);
    //           console.log(this.state)
              
    //                 this.setState({
    //                     currentLocation: {
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude
    //                     }
    //                 });
                
    //       })
    //   }

        
    //   getUsers = () => {
    //       axios({
    //           method: 'GET',
    //           url: '/api/username'
    //       }).then(response => {
    //           console.log(response);
              
    //       })
    //   }
    //   componentDidMount(){
    //     this.getUsers();
    // }

    //   checkIn = () => {
    //       console.log('button workin');
          
    //   }
        

    componentDidMount(){
        console.log("working here")
        // let key = 'AIzaSyBcMd1o8uQGD7pvA-G9kIYCMHRDvakw50U';

        // if(window.google && window.google.maps) {
        //     let map = document.getElementById('googleMap')
        //     let placesService = new window.google.maps.places.PlacesService(map);
        //     placesService.nearbySearch({
        //         location: {lat: 44.977753,lng: -93.2650108},
        //         radius: 100,
        //         type: ['restroom']
        //     }, callback)

        //     function callback(res, status) {
        //         console.log(res);
        //         console.log(status)
        //     }

        // }
        
        axios ({
            method: 'GET',
            url: `https://cors.io/?https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.130214,-93.320129&radius=100000&type=park&key=AIzaSyBcMd1o8uQGD7pvA-G9kIYCMHRDvakw50U`,
        }).then((results) => {
            console.log(results.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

      



   render(){
            return(

<MapComponent
  isMarkerShown={this.state.isMarkerShown}
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyANjAGaZns_r2hpABkO5n0iWuded4wYprA&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
//   lat={values.latitude}
//   lng={values.longitude}
/>
                
                
                
                
                
               

                
            )
    }
    
}


export default ParkMap
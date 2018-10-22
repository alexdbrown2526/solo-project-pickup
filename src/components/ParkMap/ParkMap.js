import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class ParkMap extends Component {
    static defaultProps = {
        center: {
          lat: 44.977753,
          lng: -93.2650108
        },
        zoom: 13
      };

    
        
        
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
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAFhYjFBg61_isW4gz2G1f6ngJRAnLpe_I" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              />
            </GoogleMapReact>
          </div>
        )
    }
}


export default ParkMap;
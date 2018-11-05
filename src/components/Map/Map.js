import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';

class Map extends Component{
   

   

    markerClick = (marker) => {
        console.log(marker);
        
    }

    // toggleInfoWindow = () => {
    //     if(location === null) {
    //         this.setState({windowPosition: null})
    //         return
    //     }

    //     let markerLocation = {lat: location.LatLng.lat(), lng:location.LatLng.lng()}
    //     this.setState({windowPosition:markerLocation})
    // } 


  render(){
    
    const markers = this.props.markers.map((venue,i)=>{
         const marker={

          position:{
                lat:venue.location.lat,
                lng:venue.location.lng
            }

          }
            return <Marker
            onClick={ () => this.markerClick(venue)}
            
            key={venue.id} {...marker} >

            <InfoWindow>

                <div>
                <h2>{venue.name}</h2>
                <p>{venue.location.address}</p>

</div>
                   </InfoWindow>


            </Marker>
    })

  



    return(
        <GoogleMap
          defaultZoom={13}        
            defaultCenter={this.props.center}>
          {markers}
          
        </GoogleMap>       
      )
  }
}

export default withGoogleMap(Map);
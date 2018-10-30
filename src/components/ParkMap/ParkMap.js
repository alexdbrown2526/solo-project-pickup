

import React, { Component } from 'react';
import Map from '../Map/Map';
import axios from 'axios';
import Park from '../ParkList/ParkList';
import { Button, Form, FormControl } from 'react-bootstrap';
import InfoWindowMap from '../InfoWindowMap/InfoWindowMap';
import SearchBox from '../SearchBox/SearchBox'

// import FormControl from '@material-ui/core/FormControl'
// import Form from '@material-ui/core/Form'


class MapInfo extends Component{
		state={
			searchText:'',
            venues:[],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
			// location :{
			// 	lat:44.9778,
			// 	lng:-93.2650
			// }
			longitude: -93.2650,
			latitude: 44.9778	
			
		}

	// componentWillMount(){
	// 	this.getLocation();
    // }
    
          //CLicking on a marker will show info about the location

		setPosition = () => {
			this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			})
		}

      onMarkerClick = (props, marker) => {
          this.setState({
              showingInfoWindow: true,
              activeMarker: marker,
              selectedPlace: props
          })
      }

    //   when a marker infowindow is open, clicking anywhere on
    //   the map will close the infowidow
      onMapClick = () => {
          if (this.state.showingInfoWindow) {
              this.setState({
                  showingInfoWindow: false
              })
          }
      }

	onTextChange = (event) =>{
		this.setState({[event.target.name]: event.target.value})
	
	}

	onSubmit = (event) =>{
		axios.get(`https:/cors.io/?https://api.foursquare.com/v2/venues/search?client_id=FNWWXKNLELPPEIQ5PZHXTZ3RN3RCOG1EPVID4SYEJTVXKEC4&client_secret=TWOZ3KSWFOADK5C4JCN2KDQMVVSRKIB4ORHA2IV3GMLLQ5QD
        &ll=${this.state.location.lat},${this.state.location.lng}&query=${this.state.searchText}&v=20189988`)
		    .then(res=>{
		      const venues=res.data.response.venues;
		      console.log(res);
			  this.setState({
                  venues:venues
                })
		    })
		    .catch(err=>{
		      console.log(err)
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
      componentDidMount(){
		if(navigator.geolocation) {
			navigation.geolocation.getCurrentPosition(this.setPosition)
		} else {
			console.log('Geolocate will not work with your browser');
			
		}
        this.getUsers();
    }
   
  	// getLocation = () => {
  	// 	navigator.geolocation.getCurrentPosition((position)=>{  			
  	// 		this.setState({
  	// 			location:{
  	// 				lat:position.coords.latitude,
  	// 				lng:position.coords.longitude
  	// 			}
  	// 		})
  	// 	})
  	// }

	render(){
		 
		return(

			<div>			
				
                <InfoWindowMap />
				<SearchBox />
                
				<Form className='form'>
				<FormControl
					className='search-field'
					name='searchText'
					value={this.state.searchText}
					placeholder='Find'
					onChange={this.onTextChange}
				 />
				<Button 
					className='button'
					onClick={this.onSubmit}
					>Find</Button>
				</Form>		
                <Map
				  center={this.state.location}
				  markers={this.state.venues}
				  containerElement={<div style={{ height: `500px`,width:`75%` }} />}
                  mapElement={<div style={{ height: `100%`,width:`100%` }} />}
                   activeMarker={this.state.activeMarker}
                   isMarkerShown={this.state.isMarkerShown}
				/>		
				<Park venues={this.state.venues}/>
			</div>
		)	
	}	
}

export default MapInfo;
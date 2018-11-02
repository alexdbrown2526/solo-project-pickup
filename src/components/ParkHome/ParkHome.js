import React, { Component } from 'react';
import Map from '../Map/Map';
import axios from 'axios';
import ParkList from '../ParkList/ParkList';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import '../../App.css';


class Home extends Component{
		state={
			searchText:'',
			venues:[],	
			location :{
				lat:44.9778,
				lng:-93.2650
			}
		}

	componentWillMount(){
		console.log(this.state);
		
		
		this.getLocation();
	}

	onTextChange = (event) =>{
		this.setState({[event.target.name]: event.target.value})
	}



	onTextSubmit = () =>{
		axios.get(`https://api.foursquare.com/v2/venues/search?client_id=FNWWXKNLELPPEIQ5PZHXTZ3RN3RCOG1EPVID4SYEJTVXKEC4
		&client_secret=TWOZ3KSWFOADK5C4JCN2KDQMVVSRKIB4ORHA2IV3GMLLQ5QD
		&ll=${this.state.location.lat},${this.state.location.lng}&query=${this.state.searchText}&v=20189988`)
		    .then(res=>{
		      const venues=res.data.response.venues;
		      console.log(res);
			  this.setState({venues:venues})
		    })
		    .catch(err=>{
		      console.log(err)
			})
			
			// axios.post({
			// 	method: 'POST',
			// 	url: '/api/location',
			// 	data: this.state.location
			// })
	}
   
  	getLocation=()=>{
  		navigator.geolocation.getCurrentPosition((position)=>{  			
  			this.setState({
  				location:{
  					lat:position.coords.latitude,
  					lng:position.coords.longitude
  				}
  			})
  		})
  	}

	render(){
		 
		return(

			<div>			
				<form className="form">
				<TextField className="textfield"
					type="text"
					fullWidth
					className='search-field'
					name='searchText'
					value={this.state.searchText}
					onChange={this.onTextChange}
				 />
				<Button 
				color="primary"
				variant="contained"
					className='button'
					bsStyle='info' 
					onClick={this.onTextSubmit}
					>Find</Button>
					</form>
				<Map
				  center={this.state.location}
				  markers={this.state.venues}
				  containerElement={<div style={{ height: `400px`,width:`100%` }} />}
				  mapElement={<div style={{ height: `100%`,width:`100%` }} />}
				/>	
				<ParkList venues={this.state.venues}/>
			</div>
		)	
	}	
}

export default Home;
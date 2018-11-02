import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import '../App/App.css';
import axios from 'axios'
import Modal from '../ClickModal/ClickModal'
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/icons'


class ParkList extends Component {
  constructor(props){
    super(props);
    
      this.state = {
      isOpen: false,
      users: [],
      username:'',
      activity:'',
      guests:'',
      venue: {location: {}}
    }
  }

  toggleModal = (venue) => {
    this.setState({
      isOpen: !this.state.isOpen,
      venue: venue
    });
    this.getUsersByVenue(venue);
  }

  getUsersByVenue(venue) {
    let asd;
    if(venue) {
      asd = venue.id
    } else {
      asd = this.state.venue.id;
    }
    axios({
      method:'GET',
      url: `/api/username?id=${asd}`
    }).then((response) => {
      let users;
      if(response.data) {
          users = response.data
      } else {
        users = [];
      }
      this.setState({users: users})
    })
  }

  componentDidMount(){
    this.getUsersByVenue(this.state.venue);
  }

  checkIn = (event) => {
    event.preventDefault();
    console.log('button workin');
 
    axios({
      method: 'POST',
      url: '/api/username',
      data: this.state
    }).then((response) => {
      console.log('POST', response)
      this.getUsersByVenue();
    })

 }
 
//  checkOut = (event) => {
//    console.log('button workin');
//    event.preventDefault();
   
//    axios ({
//      method: 'DELETE',
//      url: '/api/username'
//    })
//  }


handleActivityChange = (event) => {
  console.log(this.state);
  
  this.setState({ 
    activity: event.target.value
  })

}

handleGuestsChange = (event) => {
  console.log(event.target.value)
  console.log(this.state);
  
  this.setState({ 
   guests: event.target.value
  })

}

  render() {
    const venues = this.props.venues;
    const list = venues.map((venue,i)=>{
       return(
        <Card key={venue.id} className='panel'>
            <h2>{i +1}. {venue.name}</h2>
          <p>Address: {venue.location.address}</p>
          {/* {JSON.stringify(venue)} */}
          <Button color="primary" variant="contained" onClick={() => this.toggleModal(venue)}>
          Details
        </Button>

        <Modal show={this.state.isOpen}
               onClose={this.toggleModal}>
      <h2>{this.state.venue.name} {this.state.venue.address}</h2>
      <h2>User's Currently Here <Button color="primary" variant="contained" onClick={this.checkIn}>Check In</Button></h2>
      <div className="checkInDiv">
      <TextField value={this.state.activity} onChange={this.handleActivityChange} placeholder="Name of Activity"/>  
      <TextField value={this.state.guests} onChange={this.handleGuestsChange} placeholder="Number of Guests" />        
      </div>
      {/* {JSON.stringify(this.state.users)} */}
      <table>
        
        <thead>
        <tr>
          <th>User</th>
          <th>Guests</th>
          <th>Activity</th>
          <th>CheckOut</th>
        </tr>
        </thead> 
        <tbody>
        {this.state.users.map((person) =>{
            return(<tr key={person.id}>
            <td>{person.person_name}</td>
            <td>{person.number_of_guests}</td>
            <td>{person.activity}</td>
            <td><Button onClick={this.checkOut} variant="contained" color="secondary">Leave</Button></td>
            </tr>)
          })}
        
        </tbody>
      </table>
     
    </Modal>       
        </Card>
          )
    })

    return (
      <div>
        {list}
        
      </div>
    );
  }
}

export default ParkList;
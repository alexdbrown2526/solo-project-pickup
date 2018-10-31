import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import '../App/App.css';
import axios from 'axios'
import Modal from '../ClickModal/ClickModal'
import TextField from '@material-ui/core/TextField';


class ParkList extends Component {
  constructor(props){
    super(props);
    
      this.state = {isOpen: false}
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount(){
    axios({
      method: 'POST',
      url:'/api/location'
    })
  }

  checkIn = (event) => {
    event.preventDefault();
    console.log('button workin');
    
   

    

  }

  render() {
    const venues = this.props.venues;
    const list = venues.map((venue,i)=>{
       return(
        <Card key={venue.id} className='panel'>
            <h2>{i +1}. {venue.name}</h2>
          <p>Address: {venue.location.address}</p>
          
          <Button color="primary" variant="contained" onClick={this.toggleModal}>
          Details
        </Button>

        <Modal show={this.state.isOpen}
        onClose={this.toggleModal}>
          
          <h2>{venue.name} {venue.location.address}</h2>
          <h2>User's Currently Here <Button color="primary" variant="contained" onClick={this.checkIn}>Check In</Button></h2>
          <div className="checkInDiv">
          <TextField placeholder="Name of Activity"/>          
          </div>
          
          <table>
            <tbody>
            <tr>
              <th>User</th>
              <th>Activity</th>
            </tr>
            <tr>
              <td>Jack</td>
              <td>Basketball</td>
            </tr>
            <tr>
              <td>Lisa</td>
              <td>Soccer</td>
            </tr>
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
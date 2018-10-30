import React, { Component } from 'react';

import Card from '@material-ui/core/Card'
import axios from 'axios';

class ParkList extends Component {

  state = {
    clicked: false,
    selectedPark: ""
  }

  handleClick = (dr) => {
    this.setState({
      clicked: true,
      selectedPark: dr
    })
  }

  handlePageClick = () => {}

  render() {
    const venues = this.props.venues;
    
const list = venues.map((venue,i)=>{
       return(
        <Card key={venue.id} className='panel'>
          <h2>{i+1}. {venue.name} <button onClick={this.checkIn}>Check In</button></h2>
                <p>Address: {venue.location.address}</p>  
          <ul>
              <li>
                  Username Here
                  </li>
                  </ul>       
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
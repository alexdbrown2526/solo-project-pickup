import React, {Component} from 'react'
import {Marker} from 'react-google-maps'


class ParkMarker extends Component {
    render(){
        return(
            <Marker
            positon={this.props.location}

            />
        )
    }
}


export default ParkMarker
import React, {Component} from 'react'
import {InfoWindow, Marker} from 'react-google-maps'
import Card from '@material-ui/core/Card'


class ParkMarker extends Component {

    state = {
        isMarkerOpen: false,
        activeMarker: this.props.activeMarker
    }

    toggleOpen = () => {
        this.setState({
            isMarkerOpen: !this.state.isOpen
        }, () => {
            if (this.state.isMarkerOpen) {
                this.setState({
                    activeMarker: false
                }, () => {
                    this.props.closeMarkers(null)
                })
            } else {
                this.props.closeMarkers(this.props.uid)
            }
        }
        )
    }






    render(){
        return(
            <div>
                <Marker onClick={this.toggleOpen}
                position={this.props.location}
                >
                {this.state.isMarkerOpen && this.state.activeMarker ?
                <InfoWindow Width={400} defaultPosition={this.props.location}
            onCloseClick={this.props.toggleOpen}>
            <Card toggleShowPage={this.props.toggleShowPage}
            dr={this.props.park}/>
            </InfoWindow> : null}
            </Marker>
            </div>
        )
    }
}


export default ParkMarker
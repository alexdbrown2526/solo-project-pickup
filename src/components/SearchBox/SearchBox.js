import React, {Component} from 'react';

class SearchBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: ""
        }
    }

    

    handleSearchChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.location) {
            this.props.onSearch(this.state)
        }
    }






    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.location} placeholder="Where are you?" onChange={this.handleSearchChange}/>
            
            </form>
            </div>
        )
    }
}


export default SearchBox
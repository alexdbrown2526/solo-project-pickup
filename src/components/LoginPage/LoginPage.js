import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import './LoginPage.css'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Lock from '@material-ui/icons/Lock'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      
      <div className="whole">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <Card className="Login-Card">
        <form onSubmit={this.login}>
          <h1>Login</h1>
          
          <div className="username-content">
            <label htmlFor="username">

              <br/>

              <TextField
              placeholder="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                
              />
                            <AccountCircle />

            </label>
          </div>
          
          <div className ="password-content">
            <label htmlFor="password">
              
              <br/>
              
              <TextField
              placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
              <Lock />
            </label>
          </div>
          <br/>
          
          <div className="login-button">
            <Button
            variant="contained"
            color="primary"
              className="log-in"
              type="submit"
              name="submit"
              value="Log In">
              Log In
            </Button>
            
          </div>
          
        
        <center>
          <Button variant="contained" color="secondary"
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Or Create an Account
          </Button>
        </center>
        </form>
        </Card>
      </div>
      
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);

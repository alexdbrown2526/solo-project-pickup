import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import '../LoginPage/LoginPage.css'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Lock from '@material-ui/icons/Lock'

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="whole">
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <Card className="Login-Card">
        <form onSubmit={this.registerUser}>
          <h1>Register</h1>
          <div className="username-content">
            <label htmlFor="username">
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
          <div className="password-content">
            <label htmlFor="password">
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
          <div className="register-button">
            <Button
            variant="contained"
            color="primary"
              className="register"
              type="submit"
              name="submit"
              value="Register">
              Register
            </Button>
          </div>
        </form>
        <center>
          
          <Button
          variant="contained"
          color="secondary"
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Switch to Login
          </Button>
        </center>
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

export default connect(mapStateToProps)(RegisterPage);


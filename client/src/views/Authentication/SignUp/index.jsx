import React, { Component } from 'react';
import { signUp } from './../../../services/dataAuthentication';
import './style.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    signUp({
      name,
      email,
      password
    })
      .then(user => {
        this.props.updateUserInformation(user);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="signup__view">
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name"></label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          {this.state.password && this.state.password.length < 8 && (
            <small>Password needs to be 8 characters long.</small>
          )}
          <button disabled={this.state.password.length < 8}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;

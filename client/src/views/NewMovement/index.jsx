import React, { Component } from 'react';
import { create } from '../../services/movement';
import './style.scss';

class NewMovement extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      setup: '',
      protip: '',
      description: '',
      execution: '',
      video: '',
      picture: ''
    };

    this.addMovement = this.addMovement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const inputName = event.target.name;
    const value = event.target.value;

    this.setState({
      [inputName]: value
    });
  };

  addMovement(event) {
    event.preventDefault();
    const { name, setup, protip, description, execution, video } = this.state;
    create({ name, setup, protip, description, execution, video })
      .then(result => {
        console.log(result);
        this.props.history.push('/movement');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.addMovement}>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Movement name"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="Movement description"
        />
        <label htmlFor="setup">Setup</label>
        <input
          type="text"
          id="setup"
          name="setup"
          value={this.state.setup}
          onChange={this.handleChange}
          placeholder="Movement setup"
        />
        <label htmlFor="execution">Execution</label>
        <input
          type="text"
          id="execution"
          name="execution"
          value={this.state.execution}
          onChange={this.handleChange}
          placeholder="Movement execution"
        />
        <label htmlFor="protip">Protip</label>
        <input
          type="text"
          id="protip"
          name="protip"
          value={this.state.protip}
          onChange={this.handleChange}
          placeholder="Movement protip"
        />
        <label htmlFor="video">Video</label>
        <input
          type="text"
          id="video"
          name="video"
          value={this.state.video}
          onChange={this.handleChange}
          placeholder="Movement video"
        />

        <button type="submit">Add New</button>
      </form>
    );
  }
}

export default NewMovement;

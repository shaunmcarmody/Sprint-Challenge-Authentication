import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    username: '',
    password: '',
    login: true
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          name="username"
          onChange={this.handleChange}
          placeholder="username"
          type="text"
          value={this.state.username}
        /> 
        <input
          name="password"
          onChange={this.handleChange}
          placeholder="password"
          type="password"
          value={this.state.password}
        />
        <button>{this.state.login ? 'Login' : 'Signup'}</button>
        <p
          onClick={this.toggleLogin}
        >
          Switch to {this.state.login ? 'Signup' : 'Login'}
        </p>
      </form>
    )
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const payload = { username: this.state.username, password: this.state.password }
    this.setState({ username: '', password: '', department: '' });
    const endpoint = `http://localhost:3300/api/${this.state.login ? 'login' : 'register'}`;
    axios
      .post(endpoint, payload)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data);
        this.props.history.push("/jokes")
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleLogin = () => {
    this.setState(state => {
      return ({
        login: !state.login
      })
    });
  }
}

export default Form;
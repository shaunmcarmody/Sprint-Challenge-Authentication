import React from 'react';
import axios from 'axios';
import requiresAuth from '../../HOC/requiresAuth.js';

class Jokes extends React.Component {
  state = {
    jokes: []
  }
  render() {
    return (
      <ul>
        {
          this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))
        }
      </ul>
    )
  }
  componentDidMount() {
    const token = localStorage.getItem('token')
    axios
      .get('http://localhost:3300/api/jokes', {
        headers: {
          authorization: token
        }
      })
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default requiresAuth(Jokes);
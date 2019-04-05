import React from 'react';

export default (Component => {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const notLoggedIn = <h3>Please login to see the users</h3>
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>
    }
  }
})
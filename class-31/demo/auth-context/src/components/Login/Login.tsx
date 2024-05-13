import React from 'react';
import { AuthContext } from '../../context/Auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // state is still relevant!
    this.state = {
      email: '',
      password: '' 
    }
  }

  // NOT BANANA => property of a React Component Constructor, adds a property "context" to the component object.
  static contextType = AuthContext;

  render() {
    return (
      <form>
        <h2>UserId: {this.context.userId}</h2>
        <input name='username'></input>
        <input name='password'></input>
      </form>
    )
  }
}

export default Login;

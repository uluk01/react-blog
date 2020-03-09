import React from 'react';
import PropTypes from 'prop-types';

import SignUpForm from './SignUpForm';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await this.props.registerUser(this.state);
      this.props.setAuthUser(user);
    } catch (errors) {
      this.setState({ errors });
    }
  };

  render() {
    return (
      <SignUpForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  setAuthUser: PropTypes.func.isRequired,
};

export default Signup;

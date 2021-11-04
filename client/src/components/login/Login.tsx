import React from 'react';
import PropTypes from "prop-types";

import "./Login.css";

class Login extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
      console.log("did mount");
  }

  componentWillUnmount() {  }

  render() {
    return (
      <div className="Login flex w-full">
        <div className="w-full flex flex-col rounded px-4 py-4">
          <div className="fredoka text-4xl mb-3">
            Connexion:
          </div>
          <div className="">
            Identifiant:
            </div>
            <div className="mb-2">
            <input className="w-2/4 border border-green-500 border-opactity-100 rounded"></input>
          </div>
          <div className="">
            Mot de passe:
          </div>
          <div className="">
            <input className="w-2/4 border border-green-500 border-opactity-100 rounded"></input>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;

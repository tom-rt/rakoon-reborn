import React from 'react';
import PropTypes from "prop-types";

import "./Login.css";

class Connection extends React.Component {
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
      <div className="Connection flex w-full">
        CONNECTION BLOC
      </div>
    );
  }

}

export default Connection;

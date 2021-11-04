// import { grpc } from '@improbable-eng/grpc-web';
// import { Input, Output } from "./pbs/base_pb"
// import { BaseServiceClient, ServiceError } from './pbs/base_pb_service';
import React from 'react';
import PropTypes from "prop-types";

import "./TopBar.css";

class TopBar extends React.Component {
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
      <div className="TopBar bg-gradient-to-r from-blue-500 to-green-400 h-16 px-3 py-3 flex fixed w-full">
        <div className="fredoka text-4xl text-gray-100">
          Rakoon
        </div>
      </div>
    );
  }

}

export default TopBar;

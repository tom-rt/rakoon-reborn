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
      <div className="TopBar bg-green-700 h-16 px-3 py-3 flex fixed w-full">
        <div className="title text-4xl text-gray-50">
          Rakoon
        </div>
      </div>
    );
  }

}

export default TopBar;

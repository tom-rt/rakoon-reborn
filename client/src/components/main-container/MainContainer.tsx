// import { grpc } from '@improbable-eng/grpc-web';
// import { Input, Output } from "./pbs/base_pb"
// import { BaseServiceClient, ServiceError } from './pbs/base_pb_service';
import React from 'react';
import PropTypes from "prop-types";

import "./MainContainer.css";

class MainContainer extends React.Component {
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
      <div className="MainContainer bg-red-700 flex h-full w-full">
        <div className="title text-4xl text-gray-50">
          Main
        </div>
      </div>
    );
  }

}

export default MainContainer;

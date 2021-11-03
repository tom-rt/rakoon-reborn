// import { grpc } from '@improbable-eng/grpc-web';
// import { Input, Output } from "./pbs/base_pb"
// import { BaseServiceClient, ServiceError } from './pbs/base_pb_service';
import React from 'react';
import PropTypes from "prop-types";
import Login from '../login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
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
      <div className="MainContainer bg-gray-50 flex flex-col w-full pt-24 px-24 pb-8">
        <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
    </Router>
      </div>
    );
  }

}

export default MainContainer;

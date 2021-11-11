import React from 'react';
import Login from '../login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class MainContainer extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  componentWillUnmount() {  }

  render() {
    return (
      <div className="MainContainer bg-gray-50 flex flex-col w-full p-24">
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

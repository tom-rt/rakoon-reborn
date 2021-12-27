import React from "react";
import Login from "../login/Login";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Desktop from "../desktop/Desktop";
import Admin from "../admin/Admin";

class MainContainer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="MainContainer bg-gray-50 flex flex-col w-full py-24 px-2">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/desktop" element={<Desktop />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default MainContainer;

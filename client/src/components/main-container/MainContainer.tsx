import React from 'react';
import Login from '../login/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Desktop from '../login/Desktop';

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
  <BrowserRouter>       
  <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="about" element={<About />} /> */}
  </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default MainContainer;

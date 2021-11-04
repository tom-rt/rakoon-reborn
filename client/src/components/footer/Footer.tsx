import React from 'react';
import PropTypes from "prop-types";

class Footer extends React.Component {
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
      <div className="Footer bg-gradient-to-r from-blue-500 to-green-400 h-16 px-3 py-3 fixed bottom-0 w-full">
      </div>
    );
  }
}

export default Footer;

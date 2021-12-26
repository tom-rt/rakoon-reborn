import React from "react";

class TopBar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="TopBar bg-gradient-to-r from-blue-500 to-green-400 h-16 px-3 py-3 flex fixed w-full z-10">
        <div className="fredoka text-4xl text-gray-100">Rakoon</div>
      </div>
    );
  }
}

export default TopBar;

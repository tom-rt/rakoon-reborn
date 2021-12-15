import TopBar from './components/top-bar/TopBar';
import Footer from './components/footer/Footer';
import MainContainer from './components/main-container/MainContainer';
import React from 'react';

// class App extends React.Component {
//   constructor(props: any) {
//     super(props)
//     this.state = {}
//   }

//   componentDidMount() { 
//   }

//   componentWillUnmount() {  }

//   render() {
//     return (
//       <div className="App bg-gray-50">
//           <TopBar />
//           <MainContainer />
//           <Footer />
//       </div>
//     );
//   }

// }

function App() {
    return (
      <div className="App bg-gray-50">
          <TopBar />
          <MainContainer />
          <Footer />
      </div>
    );
}

export default App;

import { grpc } from '@improbable-eng/grpc-web';
import { Input, Output } from "./pbs/base_pb"
import { BaseServiceClient, ServiceError } from './pbs/base_pb_service';
import TopBar from './components/top-bar/TopBar';
import Footer from './components/footer/Footer';
import MainContainer from './components/main-container/MainContainer';
import React from 'react';

class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  async pingServer() {
    const serverUrl: string = process.env.REACT_APP_SERVER_URL || "";
    console.log("URL", process.env.REACT_APP_SERVER_URL)
    const client = new BaseServiceClient(serverUrl)
    const request = new Input();
    const metadata: grpc.Metadata = new grpc.Metadata();

    metadata.append("Access-Control-Allow-Origin", "*")
    request.setInput("Ping")
    
    await client.ping(request, (error: ServiceError | null, res: Output | null) => {
      if (error) {
        console.error(`Error ${error.code}: ${error.message}`)
      } else {
        const output: string | undefined = res?.getOutput()
        console.log("Server responded:", output)  
      }
    });
  }

  componentDidMount() { 
    this.pingServer()
  }

  componentWillUnmount() {  }

  render() {
    return (
      <div className="App bg-gray-50">
          <TopBar />
          <MainContainer />
          <Footer />
      </div>
    );
  }

}

export default App;

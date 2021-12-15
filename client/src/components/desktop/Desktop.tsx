import React from "react";
import { GrpcService } from "../../services/grpc.service";

class Desktop extends React.Component<
  {},
  { userName: string; password: string; isFormValid: boolean, grpcService: GrpcService }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isFormValid: false,
      grpcService: new GrpcService()
    };
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  render = () => {
    return (
      <div className="Desktop flex w-full">
          Desktop
      </div>
    );
  };
}

export default Desktop;

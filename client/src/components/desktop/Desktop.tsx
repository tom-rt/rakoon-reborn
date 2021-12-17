import React from "react";
import { GrpcService } from "../../services/grpc.service";

function Desktop() {

  const [state, setState] = React.useState({
    userName: "",
    password: "",
    isFormValid: false
  })
  const grpcService = new GrpcService()

    return (
      <div className="Desktop flex w-full">
          Desktop
      </div>
    );
}

export default Desktop;

import { GrpcService } from "../../services/grpc.service";
import { Context } from '../../context'
import React, { FormEvent, useContext, useEffect } from "react"

function Desktop() {

  const [state, setState] = React.useState({
    userName: "",
    password: "",
    isFormValid: false
  })

  const context = useContext(Context)
  const grpcService = new GrpcService()

    return (
      <div className="Desktop flex w-full">
          Desktop {context.user.username}
      </div>
    );
}

export default Desktop;

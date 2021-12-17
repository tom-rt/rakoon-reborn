import React, { FormEvent, useEffect } from "react";
import { GrpcService } from "../../services/grpc.service";
import { LoginResponse } from "../../pbs/user_pb"
import { ServiceError } from '../../pbs/user_pb_service';
import { useNavigate } from "react-router-dom";

function Login() {

  const [state, setState] = React.useState({
    userName: "",
    password: "",
    isFormValid: false
  })
  const grpcService = new GrpcService()
  const navigate = useNavigate();

  const login = (event: FormEvent) => {
    event.preventDefault();
    grpcService.login(state.userName, state.password, loginCallback)
  };

  const loginCallback = (err: ServiceError | null, resp: LoginResponse | null) => {
    cleanForm()
    if (err) {
      console.log("error occured while logging in:", err)
    } else {
      console.log("logging responded granted: ", resp?.getGranted())
      console.log("logging responded token: ", resp?.getToken())
      navigate('/desktop')
    }
  }

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    grpcService.signUp(state.userName, state.password, true)
    cleanForm()
  };

  const cleanForm = () => {
    setState(
      {
        userName: "",
        password: "",
        isFormValid: false    
      }
    )
  }

  const checkFormValidity = () => {
    console.log(state)
    if (state.userName.length === 0 || state.password.length === 0) {
      setState(prevState => ({
          ...prevState,
          isFormValid: false
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        isFormValid: true
    }));
  }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  useEffect(() => {
    checkFormValidity()
  }, [state.userName, state.password]);

    return (
      <div className="Login flex w-full">
        <div className="w-full flex flex-col rounded px-4 py-4">
          <div className="fredoka text-4xl mb-3">Connexion:</div>
          <form onSubmit={login}>
            <div>Identifiant:</div>
            <div className="mb-2">
              <input
                name="userName"
                type="text"
                value={state.userName}
                className="w-2/4 border border-gray-700 border-opactity-100 rounded pl-1"
                onChange={handleInputChange}
              ></input>
            </div>
            <div>Mot de passe:</div>
            <div className="mb-2">
              <input
                name="password"
                type="password"
                value={state.password}
                className="w-2/4 border border-gray-700 border-opactity-100 rounded pl-1"
                onChange={handleInputChange}
              ></input>
            </div>
            <div>
              <button
                type="submit"
                className={
                  "p-2 text-gray-100 rounded " +
                  (state.isFormValid
                    ? "bg-blue-500"
                    : "bg-gray-300 cursor-default")
                }
                disabled={!state.isFormValid}
              >
                Connexion
              </button>
            </div>
            <div>
              <button
                className={
                  "p-2 text-gray-100 rounded " +
                  (state.isFormValid
                    ? "bg-blue-500"
                    : "bg-gray-300 cursor-default")
                }
                disabled={!state.isFormValid}
                onClick={signUp}
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;

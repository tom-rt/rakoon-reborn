import React, { FormEvent, useContext, useEffect } from "react";
import { GrpcService } from "../../services/grpc.service";
import { LoginResponse } from "../../pbs/user_pb";
import { ServiceError } from "../../pbs/user_pb_service";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import fileIllustration from "../../assets/img/file-illustration.svg";

function Login() {
  const [state, setState] = React.useState({
    userName: "",
    password: "",
    isFormValid: false,
  });

  const context = useContext(Context);
  const grpcService = new GrpcService();
  const navigate = useNavigate();

  const login = (event: FormEvent) => {
    event.preventDefault();
    grpcService.login(state.userName, state.password, loginCallback);
  };

  const loginCallback = (
    err: ServiceError | null,
    resp: LoginResponse | null
  ) => {
    cleanForm();
    if (err) {
      // TODO toast error
      console.log("error occured while logging in:", err);
    } else {
      // TODO toast success
      context.user.username = state.userName;
      navigate("/desktop");
    }
  };

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    grpcService.signUp(state.userName, state.password, true);
    cleanForm();
  };

  const cleanForm = () => {
    setState({
      userName: "",
      password: "",
      isFormValid: false,
    });
  };

  const checkFormValidity = () => {
    if (state.userName.length === 0 || state.password.length === 0) {
      setState((prevState) => ({
        ...prevState,
        isFormValid: false,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        isFormValid: true,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    checkFormValidity();
  }, [state.userName, state.password]);

  return (
    <div className="Login flex w-full">
      <div className="w-full flex flex-col rounded px-4 py-4">
        <div className="flex flex-row w-full">
          <div className="flex w-full">
            <form className="flex flex-col w-full" onSubmit={login}>
              <div className="fredoka text-4xl mb-3">Connexion:</div>
              <div>Identifiant:</div>
              <div className="flex w-full mb-2">
                <input
                  name="userName"
                  type="text"
                  value={state.userName}
                  className="w-10/12 border border-gray-700 border-opactity-100 rounded pl-1"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div>Mot de passe:</div>
              <div className="flex w-full mb-2">
                <input
                  name="password"
                  type="password"
                  value={state.password}
                  className="w-10/12 border border-gray-700 border-opactity-100 rounded pl-1"
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
          <div className="flex w-full justify-end pb-20">
            <img className="max-w-80-p" src={fileIllustration} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

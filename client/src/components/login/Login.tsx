import React, { FormEvent, useContext, useEffect, useState } from "react";
import { GrpcService } from "../../services/grpc.service";
import { LoginResponse } from "../../pbs/user_pb";
import { ServiceError } from "../../pbs/user_pb_service";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import fileIllustration from "../../assets/img/file-illustration.svg";
import ClipLoader from "react-spinners/ScaleLoader";

const Login = () => {
  const [state, setState] = React.useState({
    username: "",
    password: "",
    isFormValid: false,
    isLoading: false,
    readOnly: false,
    showError: false,
  });

  const context = useContext(Context);
  const grpcService = new GrpcService();
  const navigate = useNavigate();

  const login = (event: FormEvent) => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
      readOnly: true,
      isFormValid: false,
    }));
    event.preventDefault();
    grpcService.login(state.username, state.password, loginCallback);
  };

  const loginCallback = (
    err: ServiceError | null,
    resp: LoginResponse | null
  ) => {
    cleanForm();
    if (err) {
      console.error(err);
      setState((prevState) => ({
        ...prevState,
        showError: true,
      }));
    } else {
      context.user.username = state.username;
      context.user.isAdmin = resp?.getIsadmin() || false;
      context.user.isLoggedIn = true;
      context.user.username = state.username;
      navigate("/desktop");
    }
  };

  const cleanForm = () => {
    setState((prevstate) => ({
      ...prevstate,
      username: "",
      password: "",
      isFormValid: false,
      isLoading: false,
      readOnly: false,
    }));
  };

  const checkFormValidity = () => {
    if (state.username.length === 0 || state.password.length === 0) {
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
  }, [state.username, state.password]);

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
                  readOnly={state.readOnly}
                  name="username"
                  type="text"
                  value={state.username}
                  className="w-10/12 border border-gray-700 border-opactity-100 rounded pl-1"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div>Mot de passe:</div>
              <div className="flex w-full mb-2">
                <input
                  readOnly={state.readOnly}
                  name="password"
                  type="password"
                  value={state.password}
                  className="w-10/12 border border-gray-700 border-opactity-100 rounded pl-1"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className={
                    "p-2 mr-4 text-gray-100 rounded " +
                    (state.isFormValid
                      ? "bg-blue-500"
                      : "bg-gray-300 cursor-default")
                  }
                  disabled={!state.isFormValid}
                >
                  Connexion
                </button>
                {state.isLoading && (
                  <div>
                    <ClipLoader color={"#3C83F5"} loading={true} height={30} />
                  </div>
                )}
              </div>
              {state.showError && (
                <div className="text-red-500">
                  Mauvais identifiant ou mot de passe.
                </div>
              )}
            </form>
          </div>
          <div className="flex w-full justify-end">
            <img className="max-w-80-p" src={fileIllustration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

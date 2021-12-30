import { GrpcService } from "../../services/grpc.service";
import { Context } from "../../context";
import React, { FormEvent, useContext, useEffect } from "react";

function UserModal(props: { closeModal: any }) {
  const [state, setState] = React.useState({
    userName: "",
    password: "",
    isAdmin: false,
    isFormValid: false,
  });

  const { closeModal } = props;

  const context = useContext(Context);
  const grpcService = new GrpcService();

  const notCloseModal = (event: any) => {
    event.stopPropagation();
  };

  const cleanForm = () => {
    setState({
      userName: "",
      password: "",
      isAdmin: false,
      isFormValid: false,
    });
  };

  const createUser = (event: FormEvent) => {
    event.preventDefault();
    grpcService.signUp(
      state.userName,
      state.password,
      state.isAdmin,
      closeModal
    );
    cleanForm();
  };

  const checkFormValidity = () => {
    let isFormValid: boolean = false;
    if (state.userName.length > 0 && state.password.length > 0) {
      isFormValid = true;
    }
    setState((prevState) => ({
      ...prevState,
      isFormValid: isFormValid,
    }));
  };

  useEffect(() => {
    checkFormValidity();
  }, [state.userName, state.password]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="fixed inset-0 bg-blue-500 bg-opacity-50 transition-opacity z-10">
      <div
        className="flex w-full h-full justify-center items-center pb-48"
        onClick={closeModal}
      >
        <div
          className="flex flex-col h-fit bg-gray-50 rounded p-10"
          onClick={notCloseModal}
        >
          <form onSubmit={createUser}>
            <div>Nom :</div>
            <div className="mb-2">
              <input
                name="userName"
                type="text"
                value={state.userName}
                className="border border-gray-700 border-opactity-100 rounded pl-1"
                onChange={handleInputChange}
              ></input>
            </div>
            <div>Mot de passe :</div>
            <div className="mb-2">
              <input
                name="password"
                type="text"
                value={state.password}
                className="border border-gray-700 border-opactity-100 rounded pl-1"
                onChange={handleInputChange}
              ></input>
            </div>
            <div>isAdmin</div>
            <div className="mb-2">
              <input
                name="isAdmin"
                type="checkbox"
                className="border border-gray-700 border-opactity-100 rounded pl-1"
                onChange={handleCheckboxChange}
              ></input>
            </div>
            <div>
              <button
                type="submit"
                className={
                  "w-full p-2 text-gray-100 rounded " +
                  (state.isFormValid
                    ? "bg-blue-500"
                    : "bg-gray-300 cursor-default")
                }
                disabled={!state.isFormValid}
              >
                Créer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserModal;

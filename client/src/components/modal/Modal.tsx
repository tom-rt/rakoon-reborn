import { GrpcService } from "../../services/grpc.service";
import { Context } from "../../context";
import React, {
  FormEvent,
  useContext,
  useEffect,
  MouseEventHandler,
} from "react";

function Modal(props: { closeModal: any }) {
  const [state, setState] = React.useState({
    selectOption: true,
    createFolder: false,
    uploadFile: false,
    folderName: "",
    isFormValid: false,
  });

  const { closeModal } = props;

  const context = useContext(Context);
  const grpcService = new GrpcService();

  const notCloseModal = (event: any) => {
    event.stopPropagation();
  };

  const openFolderCreation = () => {
    setState((prevState) => ({
      ...prevState,
      selectOption: false,
      createFolder: true,
      uploadFile: false,
    }));
  };

  const openFileUpload = () => {
    setState((prevState) => ({
      ...prevState,
      selectOption: false,
      createFolder: false,
      uploadFile: true,
      folderName: "",
    }));
  };

  const createFolder = () => {};

  const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.length > 0) {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
        isFormValid: true,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
        isFormValid: false,
      }));
    }
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
          {state.selectOption && (
            <div className="flex flex-col">
              <button
                className="bg-blue-500 h-12 w-full px-3 py-3 flex items-center rounded mb-2 justify-center"
                onClick={openFolderCreation}
              >
                <div className="text-base text-gray-100">Créer un dossier</div>
              </button>

              <button
                className="bg-blue-500 h-12 w-full px-3 py-3 flex items-center rounded justify-center"
                onClick={openFileUpload}
              >
                <div className="text-base text-gray-100">
                  Importer fichier(s)
                </div>
              </button>
            </div>
          )}

          {state.createFolder && (
            <form onSubmit={createFolder}>
              <div>Nouveau dossier :</div>
              <div className="mb-2">
                <input
                  name="folderName"
                  type="text"
                  value={state.folderName}
                  className="border border-gray-700 border-opactity-100 rounded pl-1"
                  onChange={handleFolderNameChange}
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
          )}

          {state.uploadFile && (
            <form onSubmit={createFolder}>
              <div>Importer :</div>
              <div className="mb-2">
                <input
                  name="Parcourir..."
                  type="file"
                  multiple={true}
                  // value={state.folderName}
                  // className="border border-gray-700 border-opactity-100 rounded pl-1"
                  className="border border-gray-700 border-opacity rounded"
                  onChange={handleFolderNameChange}
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
                  Importer
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;

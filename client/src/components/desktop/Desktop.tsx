import { GrpcService } from "../../services/grpc.service";
import { Context } from "../../context";
import React, { FormEvent, useContext, useEffect } from "react";
import FileModal from "../file-modal/FileModal";
import { useNavigate } from "react-router-dom";
import FileTable from "../file-table/FileTable";

function Desktop() {
  const [state, setState] = React.useState({
    isModalOpen: false,
    isLoggedIn: false,
  });

  const context = useContext(Context);
  const navigate = useNavigate();
  const grpcService = new GrpcService();

  const openModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: true,
    }));
  };

  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  useEffect(() => {
    if (!context.user.isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {context.user.isLoggedIn && (
        <div className="Desktop flex flex-col w-full">
          {state.isModalOpen && <FileModal closeModal={closeModal}></FileModal>}
          <div className="flex flex-row w-full border-b-2 mb-2 pb-2 border-blue-500 items-end">
            <button
              className="bg-blue-500 h-12 w-fit px-3 py-3 flex items-center rounded mr-2"
              onClick={openModal}
            >
              <div className="fredoka text-xl text-gray-100 mr-2 flex items-center">
                +
              </div>
              <div className="text-base text-gray-100">Nouveau</div>
            </button>
            <div className="text-lg">
              Bureau {context.user.username} {">"}
            </div>
          </div>
          <FileTable></FileTable>
        </div>
      )}
    </div>
  );
}

export default Desktop;

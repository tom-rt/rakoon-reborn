import { GrpcService } from "../../services/grpc.service";
import { Context } from "../../context";
import React, { FormEvent, useContext, useEffect } from "react";
import UsersTable from "../users_table/UsersTable";
import Modal from "../file-modal/FileModal";
import FileModal from "../file-modal/FileModal";
import UserModal from "../user-modal/UserModal";

function Admin() {
  const [state, setState] = React.useState({
    isModalOpen: false,
  });

  const context = useContext(Context);
  const grpcService = new GrpcService();

  const openModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: true,
    }));
  };

  useEffect(() => {
    console.log("did mount");
  }, []);

  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  return (
    <div className="Admin flex flex-col w-full">
      {state.isModalOpen && <UserModal closeModal={closeModal}></UserModal>}
      <div className="flex flex-row w-full border-b-2 mb-2 pb-2 border-blue-500 items-end">
        <button
          className="bg-blue-500 h-12 w-fit px-3 py-3 flex items-center rounded mr-2"
          onClick={openModal}
        >
          <div className="fredoka text-xl text-gray-100 mr-2 flex items-center">
            +
          </div>
          <div className="text-base text-gray-100">Créer utilisateur</div>
        </button>
      </div>
      <UsersTable></UsersTable>
    </div>
  );
}

export default Admin;

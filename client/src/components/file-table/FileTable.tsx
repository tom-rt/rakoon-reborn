import { GrpcService } from "../../services/grpc.service";
import { Context } from "../../context";
import React, { FormEvent, useContext, useEffect } from "react";
import Modal from "../modal/Modal";

function FileTable() {
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

  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  return (
    <div className="FileTable flex flex-col w-full">
      <table>
        <tr className="text-lg border-b border-gray-300">
          <th className="text-center max-w-1">Type</th>
          <th className="text-left">Nom</th>
          <th className="text-left">Crée le</th>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="flex max-w-1">
            <div className="w-min bg-blue-500">D</div>
          </td>
          <td className="text-left">Maria Anders</td>
          <td className="text-left">Germany</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="text-center max-w-1">F</td>
          <td className="text-left">Francisco Chang</td>
          <td className="text-left">Mexico</td>
        </tr>
      </table>
    </div>
  );
}

export default FileTable;

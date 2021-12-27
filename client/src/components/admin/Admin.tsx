import { GrpcService } from "../../services/grpc.service";
import { Context } from "../../context";
import React, { FormEvent, useContext, useEffect } from "react";
import Modal from "../modal/Modal";
import folder from "../../assets/img/folder.png";
import file from "../../assets/img/file.png";
import download from "../../assets/img/download.png";
import remove from "../../assets/img/remove.png";

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

  const closeModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  return (
    <div className="Admin flex flex-col w-full">
      <table>
        <tr className="text-lg border-b border-gray-300">
          <th className="text-center">Type</th>
          <th className="text-left">Nom</th>
          <th className="text-center">Crée le</th>
          <th className="text-center"></th>
          <th className="text-center"></th>
        </tr>

        <tr className="border-b border-gray-300 hover:bg-gray-300">
          <td>
            <div className="flex w-full h-full align-center justify-center">
              <img src={folder} className="max-w-2 max-h-2" />
            </div>
          </td>

          <td className="text-left">Nom de dossier</td>
          <td className="text-center">18 Avril 2021</td>
          <td className="px-2">
            <div className="flex w-full justify-center">
              <button className="flex w-full align-center rounded justify-center bg-blue-500 py-1">
                <img
                  src={download}
                  className="max-w-2 max-h-2"
                  style={{
                    filter:
                      "invert(96%) sepia(0%) saturate(15%) hue-rotate(326deg) brightness(105%) contrast(104%)",
                  }}
                />
              </button>
            </div>
          </td>
          <td className="px-2">
            <div className="flex w-full justify-center">
              <button className="flex w-full align-center rounded justify-center bg-red-500 py-1 max-w-4">
                <img
                  src={remove}
                  className="max-w-2 max-h-2"
                  style={{
                    filter:
                      "invert(96%) sepia(0%) saturate(15%) hue-rotate(326deg) brightness(105%) contrast(104%)",
                  }}
                />
              </button>
            </div>
          </td>
        </tr>
        <tr className="border-b border-gray-300 hover:bg-gray-300">
          <td>
            <div className="flex w-full h-full align-center justify-center">
              <img src={file} className="max-w-2 max-h-2" />
            </div>
          </td>

          <td className="text-left">Nom de dossier</td>
          <td className="text-center">18 Avril 2021</td>
          <td className="px-2">
            <div className="flex w-full justify-center">
              <button className="flex w-full align-center rounded justify-center bg-blue-500 py-1">
                <img
                  src={download}
                  className="max-w-2 max-h-2"
                  style={{
                    filter:
                      "invert(96%) sepia(0%) saturate(15%) hue-rotate(326deg) brightness(105%) contrast(104%)",
                  }}
                />
              </button>
            </div>
          </td>
          <td className="px-2">
            <div className="flex w-full justify-center">
              <button className="flex w-full align-center rounded justify-center bg-red-500 py-1 max-w-4">
                <img
                  src={remove}
                  className="max-w-2 max-h-2"
                  style={{
                    filter:
                      "invert(96%) sepia(0%) saturate(15%) hue-rotate(326deg) brightness(105%) contrast(104%)",
                  }}
                />
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Admin;

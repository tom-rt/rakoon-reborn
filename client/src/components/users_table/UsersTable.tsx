import { GrpcService } from "../../services/grpc.service";
import { Context } from "../../context";
import React, { useContext } from "react";
import Modal from "../file-modal/FileModal";
import folder from "../../assets/img/folder.png";
import file from "../../assets/img/file.png";
import download from "../../assets/img/download.png";
import remove from "../../assets/img/remove.png";

function UsersTable() {
  const [state, setState] = React.useState({
    isModalOpen: false,
  });

  const context = useContext(Context);
  const grpcService = new GrpcService();

  return (
    <div className="UsersTable flex flex-col w-full">
      <table>
        <tr className="text-lg border-b border-gray-300">
          <th className="text-center">id</th>
          <th className="text-center">username</th>
          <th className="text-center">password</th>
          <th className="text-center">salt</th>
          <th className="text-center">is_admin</th>
          <th className="text-center"></th>
        </tr>

        <tr className="border-b border-gray-300 hover:bg-gray-300">
          <td className="text-center">1</td>
          <td className="text-center">tom</td>
          <td className="text-center">
            $xYAtwQRlKQOcBriL9wuYKeWHZo0V4p3imZ9HOW
          </td>
          <td className="text-center">qwerty</td>
          <td className="text-center">true</td>
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

export default UsersTable;

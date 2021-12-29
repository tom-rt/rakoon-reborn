import React from "react";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    isModalOpen: false,
  });

  const navAdmin = () => {
    navigate("/admin");
  };
  const navDesktop = () => {
    navigate("/desktop");
  };

  return (
    <div className="TopBar bg-gradient-to-r from-blue-500 to-green-400 h-16 px-3 py-3 flex fixed w-full z-10">
      <div className="fredoka text-4xl text-gray-100">Rakoon</div>
      <div className="flex items-center justify-center ml-4">
        <button
          className="text-gray-100 border rounded p-2 mr-2"
          onClick={navAdmin}
        >
          Admin
        </button>
        <button
          className="text-gray-100 border rounded p-2"
          onClick={navDesktop}
        >
          Desktop
        </button>
      </div>
    </div>
  );
}

export default TopBar;

import React, {
  useEffect,
  useContext,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

const TopBar = forwardRef((props: any, ref: any) => {
  const context = useContext(Context);
  const navigate = useNavigate();

  const navAdmin = () => {
    navigate("/admin");
  };

  const navDesktop = () => {
    navigate("/desktop");
  };

  const disconnect = () => {
    context.user.username = "";
    context.user.token = "";
    context.user.isAdmin = false;
    context.user.isLoggedIn = false;
    navigate("/login");
  };

  return (
    <div className="TopBar bg-gradient-to-r from-blue-500 to-green-400 h-16 px-3 py-3 flex fixed w-full z-10">
      <div className="flex w-full">
        <button>
          <div className="fredoka text-4xl text-gray-100" onClick={navDesktop}>
            Rakoon
          </div>
        </button>
      </div>
      <div className="flex w-full justify-end flex-row">
        <div className="flex items-center justify-center ml-4">
          {context.user.isLoggedIn && context.user.isAdmin && (
            <button
              className="text-gray-100 border rounded p-2 mr-2"
              onClick={navAdmin}
            >
              Admin
            </button>
          )}
          {context.user.isLoggedIn && (
            <button
              className="text-gray-100 border rounded p-2 mr-2"
              onClick={disconnect}
            >
              Déconnexion
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default TopBar;

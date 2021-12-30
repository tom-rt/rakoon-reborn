import React from "react";

export const defaultContext = {
  user: {
    username: "",
    token: "",
    isAdmin: false,
    isLoggedIn: false,
  },
};

export const Context = React.createContext(defaultContext);

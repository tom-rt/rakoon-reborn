import React from "react";

export const defaultContext = {
    user: {
        username: "",
        password: "",
        token: ""
    }
  };
  
  export const Context = React.createContext( defaultContext );
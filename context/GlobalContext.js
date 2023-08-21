import React, { createContext, useReducer } from "react";
export const GlobalContext = createContext();

const initialState = {
  address: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      if (action.payload !== null) {
        localStorage.setItem("address", action.payload);
      }
      return {
        ...state,
        address: localStorage.getItem("address") ?? null,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: localStorage.getItem("openlogin_store"),
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

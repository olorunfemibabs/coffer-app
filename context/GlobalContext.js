import React, { createContext, useReducer } from "react";
export const GlobalContext = createContext();

const initialState = {
  address: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      localStorage.setItem("address", action.payload.address);
      return {
        ...state,
        address: localStorage.getItem("address"),
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

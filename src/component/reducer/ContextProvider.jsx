import React,{useContext, useReducer, createContext} from 'react'; 

export const stateContext = createContext();

export const ContextProvider = ({children, initialState, reducer}) => {
  return (
    <stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>
  )
}

export const useStateValue = () => useContext(stateContext);

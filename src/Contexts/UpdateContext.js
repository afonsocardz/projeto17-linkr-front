import { createContext, useContext, useState } from "react";

const UpdateContext = createContext();

export const useUpdateContext = () => useContext(UpdateContext);

export default function UpdateContextProvider({ children }) {
  const [updatee, setUpdatee] = useState(false);
  
  return (
    <UpdateContext.Provider value={{ updatee, setUpdatee }}>
      {children}
    </UpdateContext.Provider>
  );
}

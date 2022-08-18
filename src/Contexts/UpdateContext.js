import { createContext, useContext, useState } from "react";

const UpdateContext = createContext();

export const useUpdateContext = () => useContext(UpdateContext);

export default function UpdateContextProvider({ children }) {
  const [update, setUpdate] = useState(false);
  const [hastagsUpdate, setHashtagsUpdate] = useState(false);
  const [updateComment, setUpdateComment] = useState(false);

  return (
    <UpdateContext.Provider
      value={{
        update,
        setUpdate,
        hastagsUpdate,
        setHashtagsUpdate,
        updateComment,
        setUpdateComment
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
}

import { createContext, useContext, useState } from "react";

const HashtagContext = createContext();

export const useHashtagContext = () => useContext(HashtagContext);

export default function HashtagContextProvider({ children }) {
  const [hashtag, setHashtag] = useState({});
  
  return (
    <HashtagContext.Provider value={{ hashtag, setHashtag }}>
      {children}
    </HashtagContext.Provider>
  );
}
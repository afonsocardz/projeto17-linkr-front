import { createContext, useContext, useState } from "react";

const HashtagsContext = createContext();

export const useHashtagsContext = () => useContext(HashtagsContext);

export default function HashtagsContextProvider({ children }) {
  const [hashtags, setHashtags] = useState([]);

  return (
    <HashtagsContext.Provider value={{ hashtags, setHashtags }}>
      {children}
    </HashtagsContext.Provider>
  );
}

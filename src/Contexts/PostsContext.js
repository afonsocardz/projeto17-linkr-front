import { createContext, useContext, useState } from "react";

const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export default function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [newPostsCount, setNewPostsCount] = useState(0);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        newPostsCount,
        setNewPostsCount
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

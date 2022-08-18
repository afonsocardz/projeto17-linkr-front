import styled from "styled-components";
import { HiRefresh } from "react-icons/hi";
import { useUpdateContext } from "../../Contexts/UpdateContext";
import { getPosts } from "../../Services/api/posts";
import { usePostsContext } from "../../Contexts/PostsContext";
import { useUserContext } from "../../Contexts/UserContext";

export default function LoadButton() {
  const { newPostsUpdate, setNewPostsUpdate } = useUpdateContext();
  const { setUser } = useUserContext();
  const { setPosts } = usePostsContext();
  const { newPostsCount } = usePostsContext();
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  async function refreshPosts() {
    try {
      setNewPostsUpdate(!newPostsUpdate);
      if (localStorageUser) {
        setUser(localStorageUser);
        const refresh = await getPosts(1, localStorageUser.id);

        if (refresh) {
          setNewPostsUpdate(!newPostsUpdate);
          setPosts(refresh);
        }
      }
    } catch (err) {
      alert("Error when clicking to refresh posts");
    }
  }
  return (
    <Button disabled={newPostsUpdate} onClick={() => refreshPosts()}>
      <h6>{newPostsCount} new posts, load more!</h6>
      <HiRefresh />
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 61px;
  margin-bottom: 18px;
  background: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  h6 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-right: 14px;
  }

  svg {
    width: 28px;
    height: 20px;
  }

  :disabled {
    opacity: 0.7;
  }
`;

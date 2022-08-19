import styled from "styled-components";
import { usePostsContext } from "../../Contexts/PostsContext";
import { useUserContext } from "../../Contexts/UserContext";
import Loading from "../Loading/Loading";
import Post from "./Post";

export default function AllPosts() {
  const { posts } = usePostsContext();
  const { user } = useUserContext();

  if (!posts) {
    return <Loading />;
  }
  if (user.followedUsers?.length === 0) {
    return (
      <NoPosts style={{ color: "white" }}>
        You don't follow anyone yet. Search for new friends!
      </NoPosts>
    );
  }
  if (posts.length === 0) {
    return (
      <NoPosts style={{ color: "white" }}>
        No posts found from your friends!
      </NoPosts>
    );
  }
  return posts.map((post, index) => <Post key={index} post={post} />);
}

const NoPosts = styled.span`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
`;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../Contexts/UserContext";
import PostCreate from "../Components/Post/PostCreate";
import Trending from "../Components/Trending/Trending";
import Post from "../Components/Post/Post";
import { getPosts } from "../Services/api/posts";
import SearchInput from "../Components/Header/SearchInput";

export default function Timeline() {
  const [posts, setPosts] = useState(false);
  const [update, setUpdate] = useState(false);
  const { user } = useUserContext();
  console.log(user);

  useEffect(() => {
    async function fetchData() {
      try {
        setPosts(await getPosts(user.id));
      } catch (err) {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      }
    }
    fetchData();
  }, [update]);

  function listPosts() {
    if (!posts) {
      return <span style={{ color: "white" }}>Loading...</span>;
    }
    if (posts?.length === 0) {
      return <span style={{ color: "white" }}>There is no post yet.</span>;
    }
    return posts.map((post, index) => <Post key={index} post={post} />);
  }

  return (
    <>
      <SearchInput />
      <div style={{ display: "flex" }}>
        <FeedContainer>
          <PostCreate setUpdate={setUpdate} update={update} />
          {listPosts()}
        </FeedContainer>
        <div>
          <Trending />
        </div>
      </div>
    </>
  );
}

const FeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

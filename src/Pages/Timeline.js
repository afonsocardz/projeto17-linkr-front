import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../Contexts/UserContext";
import PostCreate from "../Components/Post/PostCreate";
import Trending from "../Components/Trending/Trending";
import Post from "../Components/Post/Post";
import { getPosts } from "../Services/api/posts";
import Header from "../Components/Header/Header.js";

export default function Timeline() {
  const [posts, setPosts] = useState(false);
  const [update, setUpdate] = useState(false);

  const { user, setUser } = useUserContext();
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorageUser) {
          setUser(localStorageUser);
          setPosts(await getPosts(localStorageUser.id));
        } else {
          setPosts(await getPosts(user.id));
        }
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
    <div style={{ display: "flex" }}>
      <FeedContainer>
        <Header />
        <TimelineDiv>
          <h1>Timeline</h1>
        </TimelineDiv>
        <PostCreate setUpdate={setUpdate} update={update} />
        {listPosts()}
      </FeedContainer>
      <div>
        <Trending />
      </div>
    </div>
  );
}

const FeedContainer = styled.div`
  margin-top: 72px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const TimelineDiv = styled.div`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 43px;
  display: flex;
  justify-content: flex-start;
  color: #ffffff;
  width: 42%;
  margin-top: 53px;
  h1 {
    font-size: 43px;
  }
`;

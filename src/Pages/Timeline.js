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
    console.log('atualiza');
    async function fetchData() {
      try {
        if (localStorageUser) {
          setUser(localStorageUser);
          const newPosts = await getPosts(localStorageUser.id)
          setPosts(newPosts);
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
    <>
      <Header />
      <MainContainer>
        <FeedContainer>
          <TimelineDiv>
            <h1>Timeline</h1>
          </TimelineDiv>
          <PostCreate setUpdate={setUpdate} update={update} />
          {listPosts()}
        </FeedContainer>
          <Trending />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: hidden;
`;


const TimelineDiv = styled.div`
  max-width: 611px;
  height: 160px;
  display: flex;
  align-items: center;
  display: flex;
  
  h1 {
    font-size: 43px;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    color: #ffffff;
  }
  `;
const FeedContainer = styled.div`
  max-width: 611px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  `;

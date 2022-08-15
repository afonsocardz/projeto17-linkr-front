import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header/Header.js";
import Post from "../Components/Post/Post";
import Trending from "../Components/Trending/Trending";
import { getPostsByHashtag } from "../Services/api/hashtags";

export default function Hashtag() {
  const [posts, setPosts] = useState(false);
  const [hashtagName, setHashtagName] = useState(null);
  const { hashtag } = useParams();

  useEffect(() => {
    specificHashtag();
  },[hashtag]);

  async function specificHashtag () {
    try {
        setPosts(await getPostsByHashtag(hashtag));
    } catch (err) {
        alert(`${err.data}`);
    }
  }

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
        <HashtagName>
          {hashtagName ? <h2>#{hashtagName}</h2> : <h2>#</h2>}
        </HashtagName>
        <Container>
          <FeedContainer>{listPosts()}</FeedContainer>
          <Trending />
        </Container>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
`;

const HashtagName = styled.div`
  width: 42%;
  display: flex;
  justify-content: flex-start;
  margin-top: 53px;

  h2 {
    font-size: 43px;
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 43px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const FeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

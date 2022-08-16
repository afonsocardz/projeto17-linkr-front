import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header/Header.js";
import Post from "../Components/Post/Post";
import Trending from "../Components/Trending/Trending";
import { useUpdateContext } from "../Contexts/UpdateContext.js";
import { useUserContext } from "../Contexts/UserContext.js";
import { getPostsByHashtag } from "../Services/api/hashtags.js";

export default function Hashtag() {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState(false);
  const { setUser } = useUserContext();
  const { updatee, setUpdatee } = useUpdateContext();
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    specificHashtag();
  }, [updatee]);

  async function specificHashtag() {
    try {
      if (localStorageUser) {
        const response = await getPostsByHashtag(hashtag, localStorageUser.token);
        setUser(localStorageUser);
        setPosts(response);
        setUpdatee(!updatee);
      } else {
        setPosts(await getPostsByHashtag(hashtag));
        setUpdatee(!updatee);
      }
    } catch (err) {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
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
        <Container>
          <HashtagName>
            <h2>#{hashtag}</h2>
          </HashtagName>
          <FeedContainer>{listPosts()}</FeedContainer>
        </Container>
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

const HashtagName = styled.div`
  max-width: 611px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 43px;
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 43px;
  }
`;

const Container = styled.div`
    margin-right: 25px;
`;

const FeedContainer = styled.div`
  max-width: 611px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

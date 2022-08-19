import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Header from "../Components/Header/Header.js";
import AllPosts from "../Components/Post/AllPosts.js";
import Loading from "../Components/Loading/Loading.js";
import Loadingtext from "../Components/Loading/EndText.js";
import Trending from "../Components/Trending/Trending";
import { useUserContext } from "../Contexts/UserContext.js";
import { getPostsByHashtag } from "../Services/api/hashtags.js";
import { usePostsContext } from "../Contexts/PostsContext.js";

export default function Hashtag() {
  const { posts, setPosts } = usePostsContext();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const { hashtag } = useParams();
  const { setUser } = useUserContext();
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    specificHashtag();
  }, [hashtag]);

  async function specificHashtag() {
    try {
      if (localStorageUser) {
        const response = await getPostsByHashtag(
          hashtag,
          1,
          localStorageUser.token
        );
        setUser(localStorageUser);
        setPosts(response);
      }
    } catch (err) {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
  }

  const fetchMorePosts = async () => {
    try {
      if (localStorageUser) {
        setUser(localStorageUser);
        const brandNewPosts = await getPostsByHashtag(hashtag, page, localStorageUser.token);

        if (brandNewPosts) {
          return brandNewPosts;
        }
      }
    } catch (err) {
      alert("An error occured while trying to fetch the more posts");
    }
  };

  const fetchPage = async () => {
    try {
      const loadPosts = await fetchMorePosts();

      setPosts([...posts, ...loadPosts]);

      if (loadPosts.length === 0 || loadPosts.length < 10) {
        setHasMore(false);
      }

      setPage(page + 1);
    } catch (err) {
      alert("An error occured while trying to fetch the more posts");
    }
  };

  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          <HashtagName>
            <h2>#{hashtag}</h2>
          </HashtagName>
          <FeedContainer>
            <InfiniteScroll
              dataLength={posts.length}
              next={fetchPage}
              hasMore={hasMore}
              loader={<Loading/>}
              endMessage={<Loadingtext/>}
            >
              <AllPosts />
            </InfiniteScroll>
          </FeedContainer>
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

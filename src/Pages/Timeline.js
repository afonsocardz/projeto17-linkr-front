import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInterval } from "react-use";
import styled from "styled-components";
import Header from "../Components/Header/Header.js";
import Trending from "../Components/Trending/Trending";
import PostCreate from "../Components/Post/PostCreate";
import AllPosts from "../Components/Post/AllPosts.js";
import Loading from "../Components/Loading/Loading.js";
import Loadingtext from "../Components/Loading/EndText.js";
import { useUserContext } from "../Contexts/UserContext";
import { useUpdateContext } from "../Contexts/UpdateContext";
import { useHashtagsContext } from "../Contexts/HashtagsContext";
import { getPosts } from "../Services/api/posts";
import { getHashtags } from "../Services/api/hashtags";
import { usePostsContext } from "../Contexts/PostsContext.js";
import { getFollowedUsers } from "../Services/api/followeds";
import LoadButton from "../Components/LoadButton/LoadButton.js";

export default function Timeline() {
  const { posts, setPosts } = usePostsContext();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const [delay, setDelay] = useState(15000);
  const { user, setUser } = useUserContext();
  const { update } = useUpdateContext();
  const { setHashtags } = useHashtagsContext();
  const { newPostsCount, setNewPostsCount } = usePostsContext();
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorageUser) {
          setUser(localStorageUser);
          const firtPosts = await getPosts(1, localStorageUser.id);
          const updateHashtags = await getHashtags(localStorageUser.token);
          setPosts(firtPosts);
          setHashtags(updateHashtags);
        }
        if (user.id) {
          const followedUsers = await getFollowedUsers(user.id, user.token);
          console.log(followedUsers);
          setUser({ ...user, followedUsers });
        }
      } catch (err) {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      }
    }
    fetchData();
  }, [update]);

  useInterval(
    async () => {
      try {
        if(localStorageUser){
          setUser(localStorageUser)
          const newPosts = await getPosts(1, localStorageUser.token);
          let count = 0;
  
          if (newPosts) {
            if (newPosts[0].postId !== posts[0].postId) {
              newPosts.forEach((p) => {
                if (!posts.some((oldPosts) => p.postId === oldPosts.postId)) {
                  count++;
                }
              });
              setNewPostsCount(count);
            }
          }
        }
      } catch (err) {
        alert("An error occured while trying to load the new posts");
        setDelay(null);
      }
    }, delay
  );

  const fetchMorePosts = async () => {
    try {
      if (localStorageUser) {
        setUser(localStorageUser);
        const brandNewPosts = await getPosts(page, localStorageUser.id);
        return brandNewPosts;
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
        <FeedContainer>
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchPage}
            hasMore={hasMore}
            loader={<Loading />}
            endMessage={<Loadingtext />}
          >
            <TimelineDiv>
              <h1>Timeline</h1>
            </TimelineDiv>
            <PostCreate />
            {newPostsCount === 0 ? <></> : <LoadButton />}
            <AllPosts />
          </InfiniteScroll>
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
  margin-bottom: 220px;
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
  overflow-x: hidden;
`;

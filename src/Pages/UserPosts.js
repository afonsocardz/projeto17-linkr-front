import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../Components/Header/Header.js";
import Trending from "../Components/Trending/Trending";
import Loading from "../Components/Loading/Loading";
import Loadingtext from "../Components/Loading/EndText";
import PostButton from "../Components/Post/PostButton";
import { useUserContext } from "../Contexts/UserContext";
import { usePostsContext } from "../Contexts/PostsContext.js";
import { getPostsByUserId } from "../Services/api/posts";
import { searchUserById } from "../Services/api/search";
import { followUnfollow, getFollowedUsers } from "../Services/api/followeds";

export default function UserPosts() {
  const { posts, setPosts } = usePostsContext();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const [username, setUsername] = useState(null);
  const { user, setUser } = useUserContext();
  const { id } = useParams();
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [disable, setDisable] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const pageOwner = await searchUserById(id, user.token);
        setUsername(pageOwner.username);
      } catch (err) {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorageUser) {
          setUser(localStorageUser);
          setPosts(
            await getPostsByUserId(
              localStorageUser.id,
              id,
              1,
              localStorageUser.token
            )
          );
        } else {
          setPosts(await getPostsByUserId(user.id, id, 1, user.token));
        }
        if (user.id) {
          const followedUsers = await getFollowedUsers(user.id, user.token);
          setUser({ ...user, followedUsers });
          if (
            followedUsers
              .map((followed) => followed.followedUserId)
              .includes(Number(id))
          ) {
            setIsFollowed(true);
          }
        }
      } catch (err) {
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      }
    }
    fetchData();
  }, [username]);

  const fetchMorePosts = async () => {
    try {
      if (localStorageUser) {
        setUser(localStorageUser);
        const brandNewPosts = await getPostsByUserId(
          localStorageUser.id,
          id,
          page,
          localStorageUser.token
        );

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
          <UsernameDiv>
            {username ? <h1>{username}'s Posts</h1> : null}
            {user.id === Number(id) ? null : (
              <PostButton
                changeColor={isFollowed}
                isLoading={disable}
                text={isFollowed ? "Unfollow" : "Follow"}
                createPost={async () => {
                  setDisable(true);
                  await followUnfollow(user.id, id, user.token);
                  setIsFollowed(!isFollowed);
                  setDisable(false);
                }}
              />
            )}
          </UsernameDiv>
          <FeedContainer>
            <InfiniteScroll
              dataLength={posts.length}
              next={fetchPage}
              hasMore={hasMore}
              loader={<Loading/> }
              endMessage={<Loadingtext />}
            ></InfiniteScroll>
          </FeedContainer>
        </Container>
        <Trending />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: hidden;
`;
const FeedContainer = styled.div`
  max-width: 611px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UsernameDiv = styled.div`
  width: 937px;
  height: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 43px;
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 43px;
  }
`;

const Container = styled.div`
  margin-right: 25px;
  max-width: 611px;
`;

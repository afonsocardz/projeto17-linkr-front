import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../Contexts/UserContext";
import Trending from "../Components/Trending/Trending";
import Post from "../Components/Post/Post";
import { getPostsByUserId } from "../Services/api/posts";
import Header from "../Components/Header/Header.js";
import { useParams } from "react-router-dom";
import { searchUserById } from "../Services/api/search";
import PostButton from "../Components/Post/PostButton";
import { followUnfollow, getFollowedUsers } from "../Services/api/followeds";

export default function UserPosts() {
  const [posts, setPosts] = useState(false);
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
              localStorageUser.token
            )
          );
        } else {
          setPosts(await getPostsByUserId(user.id, id, user.token));
        }
        if (user.id) {
          const followedUsers = await getFollowedUsers(user.id, user.token);
          console.log(followedUsers);
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
          <UsernameDiv>
            {username ? <h1>{username}'s Posts</h1> : null}
            {user.id === Number(id) ? null : (
              <PostButton
                changeColor={isFollowed}
                isLoading={disable}
                text={isFollowed ? "Unfollow" : "Follow"}
                createPost={() => {
                  followUnfollow(user.id, id, user.token);
                  setIsFollowed(!isFollowed);
                }}
              />
            )}
          </UsernameDiv>
          <FeedContainer>{listPosts()}</FeedContainer>
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

import { useEffect, useState } from "react";
import styled from "styled-components";
import PostCreate from "../Components/Post/PostCreate";
import Trending from "../Components/Trending/Trending";
import Post from "../Components/Post/Post";
import { getPosts } from "../Services/api/posts";

export default function Timeline() {
  const [posts, setPosts] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setPosts(await getPosts());
      } catch (err) {
        
      }
    }
    fetchData();
  }, [update]);

  return (
    <div style={{ display: "flex" }}>
      <FeedContainer>
        <PostCreate setUpdate={setUpdate} update={update} />
        {posts && posts.map((post, index) => <Post key={index} post={post} />)}
      </FeedContainer>
      <div>
        <Trending />
      </div>
    </div>
  );
}

const FeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`
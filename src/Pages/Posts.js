import styled from "styled-components";
import PostCreate from "../Components/Post/PostCreate";
import Trending from "../Components/Trending/Trending";

export default function Posts (){
  return (
    <FeedContainer>
      <PostCreate/>
      <Trending />
    </FeedContainer>
  );
}

const FeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
`
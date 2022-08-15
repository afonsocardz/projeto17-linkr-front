import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";
import UserPicture from "../User/UserPicture";
import PostLike from "./PostLike";
import PostMetadata from "./PostMetadata";

export default function Post({ post }) {
  const { message, userPicture, username, id, hashtag } = post;
  const navigate = useNavigate();

  function goToHashtagPage(click){
    const hashtag = click.substring(1);
    navigate(`/hashtag/${hashtag}`);
}

  return (
    <PostContainer>
      <PictureContainer>
        <UserPicture imageUrl={userPicture} />
        <PostLike post={post} />
      </PictureContainer>
      <ContentContainer>
        <Username>
          <Link to={`/user/${id}`}> {username}</Link>
        </Username>
        <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(click) => goToHashtagPage(click)}
        >
          <Message>{message}</Message>
        </ReactTagify>
        <PostMetadata post={post} />
      </ContentContainer>
    </PostContainer>
  );
}

const Message = styled.h2`
  font-size: 17px;
  color: #b7b7b7;
  padding-bottom: 18px;
`;

const Username = styled.h3`
  margin-bottom: 7px;
  font-size: 19px;
  color: white;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const PostContainer = styled.div`
  display: flex;
  width: 42%;
  padding: 13px 18px;
  border-radius: 16px;
  background-color: #171717;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-right: 14px;
`;

const tagStyle={
  color: "white",
  fontWeigth: 700,
  cursor: 'pointer'
};
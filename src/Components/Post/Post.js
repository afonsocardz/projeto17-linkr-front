import styled from 'styled-components';
import UserPicture from '../User/UserPicture'
import PostMetadata from './PostMetadata';

export default function Post({ post }) {
  const { message, userPicture, username } = post;
  return (
    <PostContainer>
      <PictureContainer>
        <UserPicture imageUrl={userPicture} />
      </PictureContainer>
      <ContentContainer>
        <Username>{username}</Username>
        <Message>{message}</Message>
        <PostMetadata post={post} />
      </ContentContainer>
    </PostContainer>
  );
}

const Message = styled.h2`
  font-size: 17px;
  color: #B7B7B7;
  padding-bottom: 18px;
`;

const Username = styled.h3`
  margin-bottom: 7px;
  font-size: 19px;
  color: white;
`;

const PostContainer = styled.div`
  display: flex;
  width: 611px;
  padding: 13px 18px;
  border-radius: 16px;
  background-color: #171717;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-right: 14px;
`;
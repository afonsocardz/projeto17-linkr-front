import styled from 'styled-components';
import UserPicture from '../User/UserPicture'

export default function Post({ post }) {
  const { url, title, description, image, message, userPicture, username } = post;
  return (
    <PostContainer>
      <PictureContainer>
        <UserPicture imageUrl={userPicture} />
      </PictureContainer>
      <ContentContainer>
        <Username>{username}</Username>
        <Message>{message}</Message>
        <UrlContainer>
          <TextContainer>
            <UrlTitle>{title}</UrlTitle>
            <UrlDescription>{description}</UrlDescription>
            <Url>{url}</Url>
          </TextContainer>
          <ImageContainer>
            <img style={{objectFit: 'cover', width:'100%', height:'100%'}} src={image} alt='Link'/>
          </ImageContainer>
        </UrlContainer>
      </ContentContainer>
    </PostContainer>
  );
}

const Url = styled.h3`
  color: #CECECE;
  font-size: 11px;
  margin-top: 13px;
`;

const UrlDescription = styled.h2`
  color: #9B9595;
  font-size: 11px;
  margin-top: 5px;
`;

const UrlTitle = styled.h1`
  color: #CECECE;
  font-size: 16px;
  width: 250px;
`;

const ImageContainer = styled.div`
  width: 153.44px;
  overflow: hidden;
`;

const TextContainer = styled.div`
  margin: 23px 27px 23px 19px;
  width: 302px;
`;

const UrlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 155px;
  border: 1px solid #4D4D4D;
  border-radius: 11px;
  overflow: hidden;
`;

const Message = styled.h2`
  font-size: 17px;
  color: #B7B7B7;
`;

const Username = styled.h3`
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
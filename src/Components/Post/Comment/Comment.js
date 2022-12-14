import styled from "styled-components";
import UserPicture from "../../User/UserPicture";

export default function Comment({ id, comment }) {
  const { username, comment_message, status, userPicture } = comment;

  return (
    <>
      <CommentContainer  id={id}>
        <UserPicture imageSize={'39px'} imageUrl={userPicture} />
        <TextContainer>
          <span style={{ display: 'flex', marginBottom: '5px' }}>
            <Username>{username}</Username>
            {status && <UserInfo>• {status}</UserInfo>}
          </span>
          <CommentMessage>{comment_message}</CommentMessage>
        </TextContainer>
      </CommentContainer>
      <hr style={{ borderTop: '1px', borderColor: '#353535', width: '100%', margin: 0 }} />
    </>
  );
}

const CommentMessage = styled.p`
  color: #acacac;
`;

const UserInfo = styled.span`
  color: #565656;
  margin-left: 4px;
`;

const Username = styled.h4`
  color:#f3f3f3;
  font-weight: 700;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 14px;
  height: 100%;
  width: 100%;
  margin-left: 18px;
`;

const CommentContainer = styled.div`
  display: flex;
  padding: 15px 5px;
  align-items: center;
`;
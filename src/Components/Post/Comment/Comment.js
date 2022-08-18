import styled from "styled-components";
import UserPicture from "../../User/UserPicture";

export default function Comment() {
  return (
    <>
      <CommentContainer>
        <UserPicture/>
        <TextContainer>
          <span>
            <Username>Afonso</Username>
            {<UserInfo>Author</UserInfo>}
          </span>
          <CommentMessage>OLha só esse comentário sensacional gente!!!</CommentMessage>
        </TextContainer>
      </CommentContainer>
      <hr style={{borderTop: '1px', backgroundColor: 'white', width:'100%'}}/>
    </>
  );
}

const CommentMessage = styled.p`
  color: #acacac;
`;

const UserInfo = styled.span`
  color: #565656;
  
`;

const Username = styled.h4`
  color:#f3f3f3;
  font-weight: 700;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const CommentContainer = styled.div`
  display: flex;
`;
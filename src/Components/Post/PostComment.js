import styled from "styled-components";
import Comment from "./Comment/Comment";
import CommentInput from "./Comment/CommentInput";

export default function PostComment({toggleComment, commentIsOpen}){
  return(
    <CommentModalContainer>
      <Comment/>
      <CommentInput toggleComment={toggleComment}/>
    </CommentModalContainer>
  );
}

const CommentModalContainer = styled.div`
  bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 375px;
  background-color: #1e1e1e;
  margin-top: -20px;
  margin-bottom: 29px;
  border-radius: 16px;
  padding: 25px 20px;
`;
import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { create } from "../../Services/api/comments";
import Comment from "./Comment/Comment";
import CommentInput from "./Comment/CommentInput";
import { useUserContext } from '../../Contexts/UserContext';
import { useUpdateContext } from "../../Contexts/UpdateContext";

export default function PostComment({ commentIsOpen, post, comments }) {
  const { user } = useUserContext();
  const { updateComment, setUpdateComment } = useUpdateContext();
  const [commentMesage, setCommentMessage] = useState('');

  const myRef = useRef(null);

  function focus() {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await create(commentMesage, post.id, user.token);
      if (response) {
        setCommentMessage("");
        setUpdateComment(!updateComment);
      }
    } catch (err) {
      alert("Can't comment right now, try again later")
    }

  }
  return (
    <CommentModalContainer isOpen={commentIsOpen}>
      <CommentsContainer>
        {comments && comments.map((comment, index) => <div ref={myRef} onLoad={() => focus()}><Comment key={index} id={index} comment={comment} /></div>)}
      </CommentsContainer>
      <CommentInput userPicture={user.userPicture} submitHandler={submitHandler} value={commentMesage} setValue={setCommentMessage} />
    </CommentModalContainer>
  );
}

const CommentsContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

const CommentModalContainer = styled.div`
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 0;
  background-color: #1e1e1e;
  margin-top: -75px;
  margin-bottom: 29px;
  border-radius: 16px;
  padding: 25px 20px;
  transition: height 0.3s ease-in;
  ${({ isOpen }) => isOpen && css`height: 375px;`};
`;
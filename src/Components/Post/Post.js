import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useState, useEffect} from "react";
import Modal from "react-modal";
import * as H from "../Header/style.js";
import { useUserContext } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserPicture from "../User/UserPicture";
import EditableMessage from "./Message/EditableMessage";
import PostLike from "./PostLike";
import PostMetadata from "./PostMetadata";
import { delPost } from "../../Services/api/posts";
import PostComment from "./PostComment.js";
import { useUpdateContext } from "../../Contexts/UpdateContext.js";
import { getComments } from "../../Services/api/comments.js";

export default function Post({ post }) {
  const [isEditing, setIsEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [comments, setComments] = useState(false);
  const { user } = useUserContext();
  const {updateComment, setUpdateComment} = useUpdateContext();
  const { message, userPicture, username, id, userId, hashtag } = post;
  const [msg, setMsg] = useState(message);

  Modal.setAppElement(document.querySelector(".root"));
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  async function deletePost() {
    try {
      setIsLoading(true);
      const response = await delPost(id, user.token);
      closeModal(false);
      if (response) {
        setIsLoading(false);
      }
    } catch (err) {
      alert("Something went wrong to delete this post");
      setIsLoading(false);
      closeModal();
    }
  }

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  function toggleComment(){
    setCommentIsOpen(!commentIsOpen);
    if(!commentIsOpen){
      setUpdateComment(!updateComment);
    }
  }

  useEffect(() => {
    async function fetchComments() {
      const newComments = await getComments(post.id, user.token);
      setComments(newComments);
    }
    if(commentIsOpen){
      fetchComments();
    }
  },[updateComment]);

  return (
    <div style={styledDiv}>
      <PostContainer id={id}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="_"
          overlayClassName="_"
          contentElement={(props, children) => (
            <H.ModalStyle {...props}>{children}</H.ModalStyle>
          )}
          overlayElement={(props, contentElement) => (
            <H.OverlayStyle {...props}>{contentElement}</H.OverlayStyle>
          )}
        >
          <span>{isLoading ? "Loading..." : 'Are you sure you want to delete this post?'}</span>

          <div>
            <button onClick={closeModal}>No, go back</button>
            <button onClick={deletePost}>Yes</button>
          </div>
        </Modal>
        <PictureContainer>
          <UserPicture imageUrl={userPicture} />
          <PostLike post={post} toggleComment={toggleComment}/>
        </PictureContainer>
        <ContentContainer>
          <PostTopContainer>
            <Username>
              <Link to={`/user/${userId}`}> {username}</Link>
            </Username>
            {user.id === post.userId && <div><FaPen onClick={() => toggleEditing()} /> <FaTrashAlt onClick={() => openModal()} /></div>}
          </PostTopContainer>
          <EditableMessage msg={msg} setMsg={setMsg} hashtag={hashtag} isEditing={isEditing} id={id} toggleEditing={toggleEditing} />
          <PostMetadata post={post} />
        </ContentContainer>
      </PostContainer>
      <PostComment commentIsOpen={commentIsOpen} post={post} comments={comments}/>
    </div>
  );
}
const styledDiv = {
  display: 'flex',
  flexDirection: 'column'
}

const PostTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:white;
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
  width: 100%;
  display: flex;
  padding: 13px 18px;
  border-radius: 16px;
  background-color: #171717;
  z-index: 1;
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

const Icons = styled.div`
    width: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    svg {
      width: 16px;
      height: 16px;
    }
`
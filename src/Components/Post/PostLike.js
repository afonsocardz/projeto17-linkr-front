import styled from 'styled-components';
import { useState } from "react";
import { FaRegComments } from 'react-icons/fa';
import LikeButton from './Like/LikeButton';

import { likePost } from '../../Services/api/posts';
import { useUserContext } from '../../Contexts/UserContext';

export default function PostLike({ post, toggleComment }) {
  const { user } = useUserContext();
  const { likes, likeStatus, id, whoLiked, comments } = post;
  const [likeQty, setLikeQty] = useState(Number(likes));
  const [like, setLike] = useState(likeStatus);
  console.log(like);
  async function likeHandler() {
    try {
      const response = await likePost(id, user.token);
      if (response) {
        setLike(!like);
        if (like) {
          setLikeQty(likeQty - 1);
        } else {
          setLikeQty(likeQty + 1);
        }

      }
    } catch (err) {
      alert('Something went wrong to like this post');
    }
  }
  
  return (
    <>
      <LikeContainer>
        <LikeButton like={like} likeHandler={likeHandler} likeQty={likeQty} whoLiked={whoLiked} />
        <Counter>{likeQty > 0 ? `${likeQty} likes` : ''}</Counter>
        <CommnentIcon onClick={toggleComment}/>
        <Counter>{comments > 0 ? `${comments} Comments` : ''}</Counter>
      </LikeContainer>
    </>
  );
}

const CommnentIcon = styled(FaRegComments)`
  font-size: 20px;
  fill: white;
  margin-top: 19px;
`;

const LikeContainer = styled.div`
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Counter = styled.span`
  color: white;
  margin-top: 4px;
  text-align: center;
  font-size:11px;
`;



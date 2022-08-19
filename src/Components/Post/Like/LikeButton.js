import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useUserContext } from "../../../Contexts/UserContext";

export default function LikeButton({ like, likeHandler, likeQty, whoLiked }) {
  const {user} = useUserContext();
  
  if(whoLiked?.includes(user.username)){
    const index = whoLiked.indexOf(user.username);
    whoLiked.splice(index,1,'Você');
  }
  const whoLeft = likeQty - whoLiked?.length;
  function statusHandler() {
    if (!like) {
      return <FaRegHeart style={{ fill: "white" }} />;
    }
    return <FaHeart style={{ fill: "red" }} />;
  }
  return (
    <ButtonContainer onClick={() => likeHandler()}>
      {statusHandler()}
      <Triangle></Triangle>
      <Poppin>
        {whoLiked?.length > 0 ? whoLeft - 1 > 0 ? `${whoLiked?.join(", ")} e ${whoLeft} pessoas`: `${whoLiked?.join(", ")}`: 'no likes' }
      </Poppin>
    </ButtonContainer>
  );
}

const Triangle = styled.div`
  content: "";
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
  position: absolute;
  visibility: hidden;
  transform: translate(-50%, 0);
  bottom: -115%;
`;

const Poppin = styled.div`
  visibility: hidden;
  max-width: 300px;
  min-width: 100px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  font-size: 11px;
  bottom: -200%;
  transform: translate(-50%, 0);
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  font-size: 20px;
  position: relative;
  &:hover ${Poppin}, &:hover ${Triangle} {
    visibility: visible;
  }
`;

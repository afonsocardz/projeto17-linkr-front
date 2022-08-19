import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function LikeButton({ like, likeHandler, likeQty, whoLiked }) {
  const pessoas = [];
  for (let x = 0; x < whoLiked?.length; x++) {
    pessoas.push(whoLiked[x]?.username);
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
        {like
          ? `Você, ${pessoas.join(", ")} ${
              whoLeft - 1 > 0 ? "e outras " + whoLeft + "pessoas" : ""
            }`
          : `${likeQty} pessoas`}
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

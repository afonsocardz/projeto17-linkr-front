import styled from "styled-components";
import { useState } from "react";
import UserPicture from "../User/UserPicture";
import PostLink from "./PostLink";
import PostMessage from "./PostMessage";
import PostButton from "./PostButton";
import { useUserContext } from "../../Contexts/UserContext";
import { create } from "../../Services/api/posts";

export default function PostCreate() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useUserContext();

  function createPost() {
    create(url, message, user.token);
  }

  return (
    <PostContainer>
      <PictureContainer>
        <UserPicture imageUrl={user.userPicture} />
      </PictureContainer>
      <InputContainer>
        <Title>O que você quer compartilhar hoje?</Title>
        <PostLink text={"http://..."} setValue={setUrl} />
        <PostMessage
          text={"Awesome article about #javascript"}
          setValue={setMessage}
        />
        <PostButton text={"Publish"} createPost={createPost} />
      </InputContainer>
    </PostContainer>
  );
}

const InputContainer = styled.div`
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

const PostContainer = styled.div`
  display: flex;
  width: 611px;
  padding: 13px 18px;
  border-radius: 16px;
  background-color: white;
`;

const Title = styled.span`
  color: #707070;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 20px;
  margin-top: 3px;
`;


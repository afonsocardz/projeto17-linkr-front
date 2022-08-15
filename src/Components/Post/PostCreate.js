import styled from "styled-components";
import { useState } from "react";
import UserPicture from "../User/UserPicture";
import PostLink from "./PostLink";
import PostMessage from "./PostMessage";
import PostButton from "./PostButton";
import { useUserContext } from "../../Contexts/UserContext";
import { create } from "../../Services/api/posts";

export default function PostCreate({ setUpdate, update }) {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserContext();

  async function createPost() {
    setIsLoading(true);
    try {
      const response = await create(url, message, user.token);

      if (response) {
        setUrl("");
        setMessage("");
        setIsLoading(false);
        setUpdate(!update);
      }
    } catch (err) {
      if (err.status === 422) {
        setErrors(err.data);
      }
      if (err.status === 500) {
        alert("Houve um erro ao publica seu link!");
      }
      setIsLoading(false);
    }
  }

  return (
    <PostContainer>
      <PictureContainer>
        <UserPicture imageUrl={user.userPicture} />
      </PictureContainer>
      <InputContainer>
        <Title>O que você quer compartilhar hoje?</Title>
        <PostLink
          text={"http://..."}
          name={"url"}
          errors={errors}
          setErrors={setErrors}
          value={url}
          setValue={setUrl}
          isLoading={isLoading}
        />
        <PostMessage
          text={"Awesome article about #javascript"}
          value={message}
          setValue={setMessage}
          isLoading={isLoading}
        />
        <PostButton
          text={isLoading ? "Publishing..." : "Publish"}
          createPost={createPost}
          isLoading={isLoading}
        />
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
  width: 100%;
  display: flex;
  padding: 13px 18px;
  margin-bottom: 29px;
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

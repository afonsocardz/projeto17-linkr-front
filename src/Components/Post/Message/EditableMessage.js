import { useState, useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../Contexts/UserContext";
import { editPost } from "../../../Services/api/posts";

export default function EditableMessage({ msg, setMsg, id, isEditing, toggleEditing }) {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function goToHashtagPage(click) {
    const hashtag = click.substring(1);
    navigate(`/hashtag/${hashtag}`);
  }

  async function handleKeyPress(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      setIsLoading(true);
      try {
        const response = await editPost(id, msg, user.token)
        if (response) {
          toggleEditing();
          setIsLoading(false);
        }
      } catch (err) {
        alert("Something went wrong to save your message");
        setIsLoading(false);
      }

    }
    if (e.key === "Escape") {
      toggleEditing();
    }
  }

  return (
    <>
      {isEditing ?

        <Textarea ref={inputRef} onKeyDown={(e) => handleKeyPress(e)} disabled={isLoading} placeholder={"Edite a mensagem"} value={msg} onChange={e => setMsg(e.target.value)} /> :
        <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(click) => goToHashtagPage(click)}
        >
          <Message>{msg}</Message>
        </ReactTagify>
      }
    </>
  );
}

const Message = styled.h2`
  font-size: 17px;
  color: #b7b7b7;
  padding-bottom: 18px;
`;

const tagStyle={
  color: "white",
  fontWeigth: 700,
  cursor: 'pointer'
};

const Textarea = styled.textarea`
  display: flex;
  height:66px;
  padding: 8px 12px;
  background: #EFEFEF;
  font-size: 15px;
  resize: none;
  margin-bottom: 5px;
  ::placeholder{
    color: #949494;
    font-family: 'Lato', sans-serif;
  }
  :disabled{
    opacity: 0.7;
  }
`;
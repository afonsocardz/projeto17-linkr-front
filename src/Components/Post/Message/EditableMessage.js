import { useState, useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useUserContext } from "../../../Contexts/UserContext";
import { editPost } from "../../../Services/api/posts";

export default function EditableMessage({ message, id, isEditing, toggleEditing }) {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(message);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

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

        <Message>{message}</Message>}
    </>
  );
}

const Message = styled.h2`
  font-size: 17px;
  color: #b7b7b7;
  padding-bottom: 18px;
`;

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
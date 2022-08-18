import styled from "styled-components";
import { FaRegPaperPlane } from "react-icons/fa";
import UserPicture from "../../User/UserPicture";

export default function CommentInput() {
  return (
    <InputContainer>
      <UserPicture />
      <InputBackground>
        <InputWrapper>
          <Input />
          <SendButton />
        </InputWrapper>
      </InputBackground>
    </InputContainer>
  );
}

const InputWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 11px 15px;
`;

const SendButton = styled(FaRegPaperPlane)`
  fill: white;
  font-size: 15px;
`;

const InputBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #252525;
  border-radius: 8px;
  height: 39px;
  width: 100%;
  
`;

const Input = styled.input`
  background-color: transparent;
  width: 80%;
  border: none;
  color: #acacac;
  font-size: 14px;
  :focus{
    outline: none;
  }
  ::placeholder{
    color: #575757;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;
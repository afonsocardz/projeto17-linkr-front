import styled from "styled-components";
import { FaRegPaperPlane } from "react-icons/fa";
import UserPicture from "../../User/UserPicture";

export default function CommentInput({ submitHandler, setValue, value }) {
  return (
    <InputContainer>
      <UserPicture imageSize={'39px'} imageUrl={'https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/03/the-100-lexa.jpg'} />
      <InputBackground>
        <InputWrapper onSubmit={(e) => submitHandler(e)}>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <button style={{backgroundColor: 'transparent'}} type="submit">
            <SendIcon />
          </button>
        </InputWrapper>
      </InputBackground>
    </InputContainer>
  );
}

const InputWrapper = styled.form`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 11px 15px;
`;

const SendIcon = styled(FaRegPaperPlane)`
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
  margin-left: 14px;
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
  padding: 0 5px;
  margin-top: 19px;
`;
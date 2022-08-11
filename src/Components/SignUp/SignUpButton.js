import styled from "styled-components";

export default function SignUpButton({disable, text, createUser}){
    return (
        <Button disabled={disable} onClick={() => createUser()}>{text}</Button>
    );
}

const Button = styled.button`
  width: 100%;
  height: 65px;
  background-color: #1877F2;
  color: #FFFFFF;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 23px;
  border-radius: 6px;
  margin-top: 1px;
  cursor: pointer;
  transition: background .25s ease-in-out;

  :hover {
    background-color: #2F86EF;
  }

  :disabled{
    background-color: #71a9ed;
    opacity: 4;
    cursor: default;
    }
`;
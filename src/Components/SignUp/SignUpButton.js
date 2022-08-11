import styled from "styled-components";

export default function SignUpButton({text, createUser}){
    return (
        <Button onClick={() => createUser()}>{text}</Button>
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
`;
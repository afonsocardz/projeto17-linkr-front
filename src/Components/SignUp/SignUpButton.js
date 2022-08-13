import styled from "styled-components";

export default function SignUpButton({ disable, text, createUser }) {
  return (
    <Button disabled={disable} onClick={() => createUser()}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 65px;
  background-color: #1877f2;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 23px;
  border-radius: 6px;
  margin-top: 1px;
  cursor: pointer;
  transition: background 0.25s ease-in-out;

  :hover {
    background-color: #2f86ef;
  }

  :disabled {
    background-color: #71a9ed;
    opacity: 4;
    cursor: default;
  }

  @media (max-width: 600px) {
    height: 55px;
  }
`;

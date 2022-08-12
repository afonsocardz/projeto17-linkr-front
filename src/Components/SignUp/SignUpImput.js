import styled from "styled-components";

export default function SignUpInput({ setValue, text, inputs, type }) {
  return (
    <Input
      type={type}
      placeholder={text}
      value={inputs}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 65px;
  border-radius: 6px;
  background-color: #ffffff;
  color: #9f9f9f;
  font-weight: 400;
  font-size: 20px;
  padding: 0 17px;

  ::placeholder {
    color: #9f9f9f;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 27px;
  }
`;

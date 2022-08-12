import styled from "styled-components";
import InitialScreen from "../Components/InitialScreen/InitialScreen";
import SignUpForm from "../Components/SignUp/SignUpForm";

export default function SignUp() {
  return (
    <SignUpContainer>
      <InitialScreen />
      <SignUpForm />
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

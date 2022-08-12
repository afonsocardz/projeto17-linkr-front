import styled from "styled-components";
import InitialScreen from "../Components/InitialScreen/InitialScreen";
import SignInForm from "../Components/SignIn/SignInForm";

export default function SignIn() {
  return (
    <SignUpContainer>
      <InitialScreen />
      <SignInForm />
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

import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Services/api/signin";
import SignUpButton from "../SignUp/SignUpButton";
import SignUpInput from "../SignUp/SignUpImput";
import { useUserContext } from "../../Contexts/UserContext";

export default function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { user } = useUserContext();

  function signIn() {
    setDisable(true);
    login(email, password)
      .then((res) => {
        console.log(res);
        const { token, user: dbUser } = res;
        user.username = dbUser.username;
        user.userPicture = dbUser.userPicture;
        user.id = dbUser.id;
        user.token = token;

        navigate("/timeline", { replace: true });
      })
      .catch((err) => {
        alert(`${err}`);
        setDisable(false);
      });
  }

  return (
    <SignUpContainer>
      <Forms>
        <SignUpInput
          type={"email"}
          text={"email"}
          value={email}
          setValue={setEmail}
        />
        <SignUpInput
          type={"password"}
          text={"password"}
          value={password}
          setValue={setPassword}
        />
        <SignUpButton text={"Log In"} createUser={signIn} disable={disable} />
      </Forms>
      <Link to="/sign-up">
        <p>First time? Create an account!</p>
      </Link>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 37.1528%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;

  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
  }
`;

const Forms = styled.div`
  min-width: 300px;
  max-width: 429px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

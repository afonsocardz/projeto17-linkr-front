import styled from "styled-components";
import SignUpInput from "./SignUpImput";
import SignUpButton from "./SignUpButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../Services/api/signup";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [disable, setDisable] = useState(false);

  function createUser() {
    setDisable(true);
    create(email, password, username, pictureUrl)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(`${err.data}`);
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
        <SignUpInput
          text={"username"}
          value={username}
          setValue={setUserName}
        />
        <SignUpInput
          text={"picture url"}
          value={pictureUrl}
          setValue={setPictureUrl}
        />
        <SignUpButton
          text={"Sign Up"}
          createUser={createUser}
          disable={disable}
        />
      </Forms>
      <Link to="/">
        <p>Switch back to log in</p>
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
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    margin-bottom: 90px;
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

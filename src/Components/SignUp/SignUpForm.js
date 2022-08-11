import styled from "styled-components";
import SignUpInput from "./SignUpImput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "../../Services/api/signup";
import SignUpButton from "./SignUpButton";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  function createUser() {
    create(email, password, username, pictureUrl);
  }

  return (
    <SignUpContainer>
      <Forms>
        <SignUpInput text={"email"} setValue={setEmail} />
        <SignUpInput text={"password"} setValue={setPassword} />
        <SignUpInput text={"username"} setValue={setUserName} />
        <SignUpInput text={"picture url"} setValue={setPictureUrl} />
        <SignUpButton text={"Sign Up"} createUser={createUser} />
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

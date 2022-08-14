import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import { useUserContext } from "../../Contexts/UserContext";
import { searchUser } from "../../Services/api/search";

export default function SearchInput() {
  const [usersArray, setUsersArray] = useState([]);
  const [username, setUsername] = useState("");
  const { user } = useUserContext();

  useEffect(() => {
    console.log(user.token);
    async function fetchData(username, token) {
      try {
        const response = await searchUser(username, token);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(username, user.token);
    console.log(usersArray);
  }, [username]);

  return (
    <OuterDiv>
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        type="text"
        placeholder="Search for people"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button>
        <AiOutlineSearch />
      </Button>
    </OuterDiv>
  );
}

const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  input {
    width: 50%;
    height: 45px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #ffffff;
    color: #c6c6c6;
    font-weight: 400;
    font-size: 19px;

    ::placeholder {
      color: #c6c6c6;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 19px;
    }
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #c6c6c6;
  font-size: 21px;
  width: 45px;
  height: 45px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

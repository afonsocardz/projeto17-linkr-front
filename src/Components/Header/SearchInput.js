import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import { useUserContext } from "../../Contexts/UserContext";
import { searchUser } from "../../Services/api/search";
import { Link } from "react-router-dom";

export default function SearchInput() {
  const [usersArray, setUsersArray] = useState([]);
  const [username, setUsername] = useState("");
  const { user } = useUserContext();
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    console.log(user.token);
    async function fetchData(username, token) {
      try {
        const response = await searchUser(username, token);
        setUsersArray(response);
        setIsSearching(true);
      } catch (err) {
        setUsersArray([]);
        setIsSearching(false);
      }
    }
    fetchData(username, user.token);
  }, [username]);

  function renderUsers() {
    if (usersArray.length > 0) {
      const renderedUsers = usersArray.map((user) => {
        return (
          <UserDiv>
            <img src={user.userPicture} alt="Imagem do usuário" />
            <Link to={`/user/:${user.id}`}>
              <h3>{user.username}</h3>
            </Link>
          </UserDiv>
        );
      });
      return renderedUsers;
    }

    return null;
  }

  return (
    <SearchBarContainer>
      <OuterDiv isSearching={isSearching}>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          type="text"
          placeholder="Search for people"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={(e) => setUsername("")}
        />
        <Button isSearching={isSearching}>
          <AiOutlineSearch />
        </Button>
      </OuterDiv>
      <UsersDiv>{renderUsers()}</UsersDiv>
    </SearchBarContainer>
  );
}

const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  input {
    width: calc(100% - 45px);
    height: 45px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: ${(props) =>
      props.isSearching ? "0px" : "8px"};
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
  border-bottom-right-radius: ${(props) => (props.isSearching ? "0px" : "8px")};
`;

const UserDiv = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  background-color: #e7e7e7;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 19px;
  img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin: 14px;
    object-fit: cover;
  }
  a {
    text-decoration: none;
    color: #515151;
  }
`;

const UsersDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  margin-top: 14px;
`;

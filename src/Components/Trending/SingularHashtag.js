import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SingularHashtag({ listOfHashtags }) {
  const navigate = useNavigate();

  const Teste = () => {
    if (listOfHashtags.length === 0) {
      return <Hashtag>Não há hashtags</Hashtag>;
    } else {
      return (
        <>
          {listOfHashtags.map((hashtag, index) => {
            <Hashtag
              key={index}
              onClick={() => {
                navigate(`hashtag/:${hashtag}`);
              }}
            >
              {hashtag}
            </Hashtag>;
          })}
        </>
      );
    }
  };

  return <Teste />;
}

const Hashtag = styled.h5`
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffff;
  font-weight: 700;
  font-size: 19px;
  cursor: pointer;
`;

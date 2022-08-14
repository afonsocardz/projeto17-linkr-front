import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getHashtags } from "../../Services/api/hashtags";

export default function Trending() {
  const [listOfHashtags, setListOfHashtags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    trendingHashtags();
  }, []);

  async function trendingHashtags() {
    try {
      setListOfHashtags(await getHashtags());
    } catch (err) {
      alert(`${err.data}`);
    }
  }

  return (
    <TrendingContainer>
      <Tittle>
        <h4>trending</h4>
      </Tittle>
      <TrendingHashtags>
        {listOfHashtags.length === 0 ? (
          <SpninnerContainer>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="35"
              visible={true}
            />
          </SpninnerContainer>
        ) : (
          <>
            {listOfHashtags.map((hashtag, index) => {
              return (
                <Hashtag
                  key={index}
                  onClick={() => {
                    navigate(`hashtag/${hashtag.hashtag.replace("#", "")}`);
                  }}
                >
                  {hashtag.hashtag}
                </Hashtag>
              );
            })}
          </>
        )}
      </TrendingHashtags>
    </TrendingContainer>
  );
}

const TrendingContainer = styled.div`
  width: 300px;
  height: auto;
  background-color: #171717;
  border-radius: 16px;
  padding-left: 16px;
`;

const Tittle = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #484848;
  display: flex;
  align-items: center;

  h4 {
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 27px;
  }
`;

const TrendingHashtags = styled.div`
  width: 270px;
  height: auto;
  margin: 22px 0;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Hashtag = styled.h5`
  margin: 0;
  width: 100%;
  color: #ffffff;
  font-weight: 700;
  font-size: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const SpninnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

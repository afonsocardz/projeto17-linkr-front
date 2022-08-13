import { useEffect, useState } from "react";
import styled from "styled-components";
import { getHashtags } from "../../Services/api/hashtags";
import SingularHashtag from "./SingularHashtag";

export default function Trending() {
  const [listOfHashtags, setListOfHashtags] = useState([]);
  
  useEffect(() => {
    trendingHashtags();
  }, []);

 function trendingHashtags() {
    getHashtags()
      .then((res) => {
        setListOfHashtags([...res.data]);
      })
      .catch((err) => {
        alert(`${err.data}`);
      });
  }

  return (
    <TrendingContainer>
      <Tittle>
        <h4>trending</h4>
      </Tittle>
      <TrendingHashtags>
        <SingularHashtag
          listOfHashtags={listOfHashtags}
        />
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
`;

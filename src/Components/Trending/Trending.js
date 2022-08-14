import styled from "styled-components";

export default function Trending() {
  return (
    <TrendingContainer>
      <Tittle>
        <h4>trending</h4>
      </Tittle>
      <TrendingHashtags>
        <h5></h5>
      </TrendingHashtags>
    </TrendingContainer>
  );
}

const TrendingContainer = styled.div`
  margin-top: 72px;
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
  display: flex;
  flex-direction: column;
  gap: 13px;

  h5 {
    margin: 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ffffff;
    font-weight: 700;
    font-size: 19px;
  }
`;

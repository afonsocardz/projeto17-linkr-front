import styled from "styled-components";

export default function InitialScreen() {
  return (
    <LinkrContainer>
      <LinkrTittle>
        <h1>linkr</h1>
        <h3>save, share and discover the best links on the web</h3>
      </LinkrTittle>
    </LinkrContainer>
  );
}

const LinkrContainer = styled.div`
  width: 62.8472%;
  height: 100vh;
  background-color: #151515;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    width: 100vw;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
`;

const LinkrTittle = styled.div`
  max-width: 450px;
  margin-left: 15.9117%;
  padding-top: 29.7851%;
  color: #ffffff;
  font-weight: 700;

  h1 {
    font-family: "Passion One";
    font-size: 106px;
    line-height: 116.71px;
    margin: 0;
  }

  h3 {
    font-family: "Oswald";
    font-size: 43px;
    line-height: 63.73px;
    word-wrap: break-word;
  }

  @media (max-width: 600px) {
    width: 65%;
    padding-top: 10px;
    margin-left: 0;
    h1 {
      font-size: 76px;
      line-height: 83px;
      text-align: center;
    }
    h3 {
      font-size: 23px;
      line-height: 34px;
    }
  }
`;

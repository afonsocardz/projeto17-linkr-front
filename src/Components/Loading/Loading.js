import { Oval } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingContainer>
      <Oval
        height={36}
        width={36}
        color="#6D6D6D"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#a3a1a1"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <P>Loading more posts...</P>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
width: 100%;
  height: 245px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const P = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;

  color: #6d6d6d;
`;

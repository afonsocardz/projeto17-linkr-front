import styled from "styled-components";

export default function PostButton({
  text,
  isLoading,
  createPost,
  changeColor,
}) {
  return (
    <div style={alignRight}>
      <Button
        changeColor={changeColor}
        disabled={isLoading}
        onClick={() => createPost()}
      >
        {text}
      </Button>
    </div>
  );
}

const alignRight = {
  display: "flex",
  justifyContent: "end",
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 31px;
  font-weight: 700;
  color: ${(props) => (props.changeColor ? "#1877f2" : "white")};
  background-color: ${(props) => (props.changeColor ? "white" : "#1877f2")};
  border-radius: 5px;
  :disabled {
    opacity: 0.7;
  }
`;

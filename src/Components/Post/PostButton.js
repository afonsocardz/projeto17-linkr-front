import styled from 'styled-components';

export default function PostButton({ text, isLoading, createPost }) {
  return (
    <div style={alignRight}>
      <Button disabled={isLoading} onClick={() => createPost()}>{text}</Button>
    </div>

  );
}

const alignRight = {
  display: 'flex',
  justifyContent:'end',
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 31px;
  color: white;
  background-color: #1877F2;
  border-radius: 5px;
  :disabled{
    opacity: 0.7;
  }
`;
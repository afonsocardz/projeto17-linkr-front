import styled from 'styled-components';

export default function PostLink({setValue, text}) {
  return (
    <InputLink placeholder={text} onChange={e => setValue(e.target.value)} />
  );
}

const InputLink = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height:30px;
  padding: 5px 12px;
  background: #EFEFEF;
  font-size: 15px;
  margin-bottom:5px ;
  ::placeholder{
    color: #949494;
    font-family: 'Lato', sans-serif;
  }
`;
import styled from 'styled-components';

export default function PostMessage({setValue, text = "Digite uma mensagem", value, isLoading}) {
  return (
    <Textarea disabled={isLoading} placeholder={text} value={value} onChange={e => setValue(e.target.value)}/>
  );
}

const Textarea = styled.textarea`
  display: flex;
  height:66px;
  padding: 8px 12px;
  background: #EFEFEF;
  font-size: 15px;
  resize: none;
  margin-bottom: 5px;
  ::placeholder{
    color: #949494;
    font-family: 'Lato', sans-serif;
  }
  :disabled{
    opacity: 0.7;
  }
`;
import { useEffect } from 'react';
import styled from 'styled-components';

export default function PostLink({ setValue, value, text, name, errors = false, isLoading }) {
  const error = errors && errors.find(err => err.includes(name));

  useEffect(() =>{
    if(error){
      setValue('');
    }
  },[error, setValue])

  function onChange(value) {
    setValue(value);
  }

  return (
    <InputLink disabled={isLoading} error={error} placeholder={error ? error : text} name={name} value={value} onChange={e => onChange(e.target.value)} />
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
    color: ${({ error }) => error ? 'red' : '#949494'};
    font-family: 'Lato', sans-serif;
  }
  :disabled{
    opacity: 0.7;
  }
`;
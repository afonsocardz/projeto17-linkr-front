import styled from "styled-components";

export default function SignUpInput({setValue, text, inputs}) {
    return (
      <Input placeholder={text} value={inputs} onChange={e => setValue(e.target.value)} />
    );
}

const Input = styled.input`
    width: 100%;
    height: 65px;
    border-radius: 6px;
    background-color: #FFFFFF;
    color: #9F9F9F;
    padding: 0;

    ::placeholder{
    color: #9F9F9F;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 27px;
    padding-left: 17px;
    }
`
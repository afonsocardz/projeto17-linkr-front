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
    font-weight: 400;
    font-size: 20px;
    padding: 0 17px;

    ::placeholder{
    color: #9F9F9F;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 27px;
    }
`
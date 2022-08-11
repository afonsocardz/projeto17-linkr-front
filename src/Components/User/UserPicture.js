import styled from 'styled-components';

export default function UserPicture ({imageUrl}){
  return (
    <CircleDiv>
      <UserImage src={imageUrl} alt='Imagem do usuário'/>
    </CircleDiv>
  );
}

const CircleDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const UserImage = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`;
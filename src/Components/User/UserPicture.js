import styled from 'styled-components';

export default function UserPicture ({imageUrl, imageSize}){
  return (
    <CircleDiv imageSize={imageSize}>
      <UserImage  src={imageUrl} alt='Imagem do usuário'/>
    </CircleDiv>
  );
}

const CircleDiv = styled.div`
  width: ${({imageSize}) => imageSize ? imageSize : '50px' };
  height: ${({imageSize}) => imageSize ? imageSize : '50px' };
  border-radius: 50%;
  overflow: hidden;
`;

const UserImage = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`;
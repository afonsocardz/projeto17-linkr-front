import styled from 'styled-components';
import UserPicture from '../User/UserPicture'

export default function Post({type}){
  return (
    <PostContainer>
      <UserPicture/>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  display: flex;
  width: 611px;
`;
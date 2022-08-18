import styled from "styled-components";

export default function PostMetadata({ post }) {
  const { url, title, description, image } = post;
  return (
    <a
      href={url}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
    >
      <UrlContainer>
        <TextContainer>
          <div>
            <UrlTitle>{title}</UrlTitle>
            <UrlDescription>{description}</UrlDescription>
          </div>
          <div>
            <Url>{url}</Url>
          </div>
        </TextContainer>
        <ImageContainer>
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={image}
            alt="Link"
          />
        </ImageContainer>
      </UrlContainer>
    </a>
  );
}

const Url = styled.h3`
  color: #cecece;
  font-size: 11px;
`;

const UrlDescription = styled.h2`
  color: #9b9595;
  font-size: 11px;
  margin-top: 5px;
`;

const UrlTitle = styled.h1`
  color: #cecece;
  font-size: 16px;
  width: 250px;
`;

const ImageContainer = styled.div`
  width: 30%;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 23px 27px 23px 19px;
  width: 60%;
`;

const UrlContainer = styled.div`
  display: flex;
  max-width: 511px;
  justify-content: space-between;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  overflow: hidden;
  img {
    max-width: 153px;
    max-height: 153px;
    object-fit: cover;
  }
`;

import styled from "styled-components";

export const Header = styled.header`
  height: 72px;

  background-color: #171717;
  color: #ffffff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;

  user-select: none;

  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;

  h1 {
    font-family: "Passion One", cursive;
    font-size: 49px;
    letter-spacing: 0.05em;
    padding-left: 20px;
  }

  nav {
    height: 100%;

    position: relative;

    padding-right: 20px;

    ul {
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      list-style: none;

      li {
        height: 100%;

        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        transition: filter 300ms;
        &:hover {
          /* filter: brightness(1.2); */
        }

        svg {
          font-size: 22px;
          cursor: pointer;
        }

        img {
          height: 70%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          margin: 0;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
`;
export const DropdownMenu = styled.div`
  position: absolute;
  top: 72px;
  right: 0;

  width: 150px;

  border-radius: 0 0 0 20px;

  background-color: #171717;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 700;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 90%;
    padding: 10px;
    margin: 5px;

    border-radius: 5px 5px 5px 5px;

    &:last-of-type {
      border-radius: 5px 5px 5px 15px;
    }

    cursor: pointer;

    transition: filter 300ms;

    &:hover {
      background-color: #171717;
      filter: brightness(1.5);
    }
  }
`;

export const ModalStyle = styled.div`
  width: 41.5vw;
  min-width: 597px;
  height: 262px;
  background-color: #333333;
  border-radius: 50px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 48px;
  line-height: 39px;
  span {
    font-size: 34px;
    color: #ffffff;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 27px;
    button {
      width: 9.3vw;
      min-width: 114px;
      height: 37px;
      background: #1877f2;
      border-radius: 5px;
      font-family: "Lato", sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:first-child {
        background: #ffffff;
        color: #1877f2;
      }
    }
  }
  @media (max-width: 769px) {
    min-width: 280px;
    height: 150px;
    line-height: 30px;
    gap: 10px;
    span {
      font-size: 22px;
    }
    div {
      gap: 20px;
      button {
        width: 80px;
        min-width: 0px;
        height: 30px;
        font-size: 12px;
      }
    }
  }
`;

export const OverlayStyle = styled.div`
  display: none;
`;

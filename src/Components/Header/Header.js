import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import Modal from "react-modal";

import profileImg from "../../assets/profile.jpg";

import * as H from "./style.js";

import { MenuContext } from "../../Contexts/MenuContext.js";

import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import { NavItemHidden } from "./NavItemHidden";

import { useAuth } from "../../hooks/useAuth.js";
import { DropdownMenu } from "./DropdownMenu";
import SearchInput from "./SearchInput";
import { useUserContext } from "../../Contexts/UserContext";

export default function Header() {
  const navigate = useNavigate();
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useUserContext();

  Modal.setAppElement(document.querySelector(".root"));
  function openModal() {
    setModalIsOpen(true);
  }

  function logout() {
    localStorage.removeItem("user");

    navigate("/", { replace: true });
  }

  function closeModal() {
    setModalIsOpen(false);
    handleMenuClick();
  }

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  async function handleLogoutClick() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    const API_URL = process.env.REACT_APP_HTTP_REQUEST_BASE_URL;

    const URL = `${API_URL}/session`;

    try {
      await axios.delete(URL, config);
    } catch ({ response }) {
    } finally {
      handleMenuClick();
      logout();
    }
  }

  function handleClickOnImage() {
    navigate(`/user/${user.id}`);
  }

  return (
    <H.Header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <H.ModalStyle {...props}>{children}</H.ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <H.OverlayStyle {...props}>{contentElement}</H.OverlayStyle>
        )}
      >
        <span>Are you sure you want to logout?</span>

        <div>
          <button onClick={closeModal}>No, go back</button>
          <button onClick={handleLogoutClick}>Yes</button>
        </div>
      </Modal>
      <Link to="/timeline">
        <h1>linkr</h1>
      </Link>
      <SearchInput />
      <Navbar>
        <NavItem>
          {menuIsOpen ? (
            <IoIosArrowUp onClick={handleMenuClick} />
          ) : (
            <IoIosArrowDown onClick={handleMenuClick} />
          )}
          <NavItemHidden>
            <DropdownMenu>
              <span onClick={openModal}>Logout</span>
            </DropdownMenu>
          </NavItemHidden>
        </NavItem>
        <NavItem>
          <img
            onClick={handleClickOnImage}
            src={user?.userPicture?.length > 0 ? user.userPicture : profileImg}
            alt=""
          />
        </NavItem>
      </Navbar>
    </H.Header>
  );
}

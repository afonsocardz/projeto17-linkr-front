import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import axios from 'axios';
import Modal from 'react-modal';

import profileImg from '../../assets/profile.jpg';

import * as H from './style.js';

import { MenuContext } from '../../contexts/MenuContext';

import { Navbar } from './Navbar';
import { NavItem } from './NavItem';
import { NavItemHidden } from './NavItemHidden';

import { useAuth } from '../../hooks/useAuth.js';
import { DropdownMenu } from './DropdownMenu';

export default function Header() {
  const navigate = useNavigate();
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user, logout } = useAuth();

  Modal.setAppElement(document.querySelector(".root"));
  function openModal() {
    setModalIsOpen(true);
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
    }

    const API_URL = 'http://localhost:4000'

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
    navigate(`/user/${user.id}`)
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
          src={
            user?.profileImage?.length > 0 ? user.profileImage : profileImg 
          }
          alt= ""
          />
        </NavItem>
      </Navbar>
    </H.Header>
  )
}; 
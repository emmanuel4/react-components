import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';

const NavbarContainer = styled.div`
  padding: 0.5rem 1rem;
  box-shadow: 0 0.25rem 0.25rem #aeaeae80;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #aeaeae;
  h2 {
    font-weight: 700;
  }
  .links {
    position: absolute;
    top: -8rem;
    left: -70rem;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transition: all .5s ease;
    &.active {
      width: 100%;
      display: block;
      position absolute;
      top: 30%;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
    }
    a {
      font-size: 2rem;
      display: block;
      text-decoration: none;
      color: green;
      position: relative;
      &:nth-child(4n) {
        display: inline-block;
        margin: 1rem auto;
      }
      .oval {
        width: 7.5rem;
        height: 3rem;
        border: 1px solid red;
        border-radius: 50%;
        padding: 0.5rem;
        transform: rotate(-10deg);
        margin-top: -2.85rem;
        margin-left: -0.4rem;
        z-index: 0;
      }
    }
    @media screen and (min-width: 768px) {
      position: initial;
      margin: 0;
      display: block;
      a {
        font-size: 1rem;
        display: inline;
        margin: 1rem 0.5rem;
        &:nth-child(4n) {
          margin: 0 auto;
        }
        .oval {
          width: 3rem;
          height: 1.5rem;
          margin-top: -1.75rem;
          margin-left: 0;
        }
      }
    }
  }

  .burgerButton {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const BackgroundDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -70rem;
  left: -20rem;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavbarContainer>
        <h2>Navbar</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">
            Contact
            <div className="oval"></div>
          </a>
        </div>
        <div className="burgerButton">
          <BurgerButton
            clicked={clicked}
            handleClick={handleClick}
          ></BurgerButton>
        </div>
        <BackgroundDiv
          className={`initial ${clicked ? 'active' : ''}`}
        ></BackgroundDiv>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

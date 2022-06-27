import React from "react";
import styled from "styled-components";
import {
  FaCartArrowDown,
  FaSignInAlt,
  FaUserPlus,
  FaCartPlus,
} from "react-icons/fa";

export default function HeaderTwo() {
  const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(2, 12, 12);
    height: 4.5rem;
    margin-top: 5px;

    .title {
      color: white;
      text-transform: uppercase;
      padding-left: 15px;
    }

    .nav__menu {
      display: flex;
      gap: 0.8rem;
      color: white;
      text-transform: uppercase;
      font-size: 13px;

      & li a {
        color: white;
      }
    }

    .nav__options {
      margin-right: 15px;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      width: 14rem;
      // background-color: red;
      text-align: center;
      & > * {
        background-color: inherit;
        color: white;
        border: none;
        display: flex;
        font-weight: bold;
        cursor: pointer;
      }
    }

    @media screen and (max-width: 720px) {
      .nav__menu {
        display: none;
      }
    }
  `;
  return (
    <>
      <StyledNav>
        <div className="col title">
          <h2>
            Mosco Mart <FaCartArrowDown />
          </h2>
        </div>
        <ul className="col nav__menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="col nav__options">
          <button className="btn btn1" type="submit">
            <FaSignInAlt /> Login
          </button>
          <button className="btn btn2" type="submit">
            <FaUserPlus /> Register
          </button>
          <button className="btn btn3" type="submit">
            <FaCartPlus /> Cart <span>(0)</span>
          </button>
        </div>
      </StyledNav>
    </>
  );
}

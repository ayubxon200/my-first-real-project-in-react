import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          e-Learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.3 }}
            initial={{ width: "0%" }}
            animate={{ width: pathName === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/courses">Courses</Link>
          <Line
            transition={{ duration: 0.3 }}
            initial={{ width: "0%" }}
            animate={{ width: pathName === "/courses" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.3 }}
            initial={{ width: "0%" }}
            animate={{ width: pathName === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #383e47;

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #30bee1;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;

export default Nav;

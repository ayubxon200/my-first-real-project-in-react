import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// images
import react from "../images/react.jpg";
import redux from "../images/redux.jpg";
import javaScript from "../images/js.jpg";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Courses = () => {
  return (
    <StyledCourses
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Course>
        <h2>Interaktiv React</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={react} alt="react" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv Redux</h2>
        <div className="line"></div>
        <Link to="/courses/redux">
          <img src={redux} alt="redux" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JvaScript</h2>
        <div className="line"></div>
        <Link to="/courses/javascript">
          <img src={javaScript} alt="javaScript" />
        </Link>
      </Course>
      <p>Meni ochirib yubor</p>
    </StyledCourses>
  );
};

const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  h2 {
    padding: 1rem 0;
  }
`;

const Course = styled.div`
  padding: 10rem;
  img {
    width: 90%;
    height: 70vh;
    object-fit: cover;
  }

  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
`;

export default Courses;

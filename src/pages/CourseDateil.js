import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import CourseState from "../courseState";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const CourseDatil = () => {
  const location = useLocation();
  const url = location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  // useEffect
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );

    setCourse(currentCourse[0]);
  }, [courses, url]);
  return (
    <>
      {course && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="laptop" />
            <Awards>
              {course.awards.map((award) => (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              ))}
            </Awards>
          </Header>
          <ImageDisplay>
            <img src={course.seconddaryImg} alt="read" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #fff;
`;
const Header = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    height: 0.5rem;
    background-color: #30bee1;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default CourseDatil;

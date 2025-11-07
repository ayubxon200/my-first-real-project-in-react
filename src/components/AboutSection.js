import React from "react";
// import images
import homeIntro from "../images/home_intro.jpg";
// import styled components
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Be educated so that</h2>
          </div>
          <div className="hide">
            <h2>you can change</h2>
          </div>
          <div className="hide">
            <h2>the world.</h2>
          </div>
        </div>

        <p>
          An educated mind can teach many. An educated mind is better then empty
          one.
        </p>
        <button>About US</button>
      </div>

      <div className="image">
        <img src={homeIntro} alt="man reading book" />
      </div>
    </About>
  );
};

// Styled components
const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;

export default AboutSection;

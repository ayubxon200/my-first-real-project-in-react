import React from "react";
// images
import homeIntro2 from "../images/home_intro2.jpg";
// styles
import { About, Description, Image } from "../Styles";
import styled from "styled-components";

const BenefitsSection = () => {
  return (
    <Benefits>
      <Description>
        <h2>High Quality Learning System</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>

      <Image>
        <img src={homeIntro2} alt="girl learn on computer" />
      </Image>
    </Benefits>
  );
};

// Styled
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0, 100% 91%, 0% 100%);
    border-left: 4px solid #30bee1;
  }

  img {
    height: 80vh;
  }
`;

export default BenefitsSection;

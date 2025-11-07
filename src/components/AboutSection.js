import React from "react";
// import images
import homeIntro from "../images/home_intro.jpg";
// import styled components
// import styled from "styled-components";

import { About, Description, Image, Hide } from "../Styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>
              you <span>can change</span>
            </h2>
          </Hide>
          <Hide>
            <h2>the world.</h2>
          </Hide>
        </div>

        <p>
          An educated mind can teach many. An educated mind is better then empty
          one.
        </p>
        <button>About US</button>
      </Description>

      <Image>
        <img src={homeIntro} alt="man reading book" />
      </Image>
    </About>
  );
};

export default AboutSection;

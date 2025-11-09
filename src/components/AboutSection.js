import React from "react";
// import images
import homeIntro from "../images/home_intro.jpg";
// import styled components
// import styled from "styled-components";

import { About, Description, Image, Hide } from "../Styles";
// framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Be educated so that</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              you <span>can change</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>the world.</motion.h2>
          </Hide>
        </motion.div>

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

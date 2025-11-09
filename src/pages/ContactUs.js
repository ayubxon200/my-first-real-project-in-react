import React from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact US</h1>
    </motion.div>
  );
};

export default ContactUs;

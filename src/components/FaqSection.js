import React from "react";
// styles
import { About } from "../Styles";
import styled from "styled-components";
import { LayoutGroup } from "framer-motion";
// Toggle
import Toggle from "./FaqToggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="Can I learn programming from scratch on your platform?">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, tempora.
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="How much di I have to pay per month">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, tempora.
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="Is it possible to pay in full in one go">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, tempora.
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="If I buy the course, can my brother and I also study?">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, tempora.
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .questions {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }

  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }
`;

export default FaqSection;

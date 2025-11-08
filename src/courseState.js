// images
import react from "./images/react.jpg";
import react1 from "./images/react1.png";
import redux from "./images/redux.jpg";
import redux1 from "./images/redux1.webp";
import js from "./images/js.jpg";
import js1 from "./images/js1.png";

const CourseState = () => {
  return [
    {
      title: "Interaktive React",
      mainImg: react,
      seconddaryImg: react1,
      url: "course/react",
      awards: [
        {
          title: "Lorem ipsum sit",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo esse enim natus, libero sed debitis ad. Architecto, labore libero!",
        },
        {
          title: "Lorem ipsum sit",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo esse enim natus, libero sed debitis ad. Architecto, labore libero!",
        },
      ],
    },
    {
      title: "Interaktive Redux",
      mainImg: redux,
      seconddaryImg: redux1,
      url: "course/react",
      awards: [
        {
          title: "Lorem ipsum sit",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo esse enim natus, libero sed debitis ad. Architecto, labore libero!",
        },
        {
          title: "Lorem ipsum sit",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo esse enim natus, libero sed debitis ad. Architecto, labore libero!",
        },
      ],
    },
    {
      title: "Interaktive JavaScript",
      mainImg: js,
      seconddaryImg: js1,
      url: "course/jsvascript",
      awards: [
        {
          title: "Lorem ipsum sit",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo esse enim natus, libero sed debitis ad. Architecto, labore libero!",
        },
        {
          title: "Lorem ipsum sit",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo esse enim natus, libero sed debitis ad. Architecto, labore libero!",
        },
      ],
    },
  ];
};

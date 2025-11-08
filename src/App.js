import React from "react";
// Global style
import GlobalStyle from "./components/GlobalStyle";
// import components
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import CourseDatil from "./pages/CourseDateil";
// React router dom
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/" index element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDatil />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;

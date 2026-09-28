import { useState } from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Skill from "../Component/Skill";
import Project from "../Component/Project";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar
      />

      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
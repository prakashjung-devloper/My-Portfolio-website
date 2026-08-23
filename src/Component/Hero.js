import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">

        <h1 className="display-6 display-md-4 display-lg-3 fw-medium text-light mb-2">
          Hi, I'm <span style={{ color: "#60A5FA" }}>Prakash</span> Jung
        </h1>

        <h2 className="fw-bold fs-1 text-white lh-1 mb-3">
          FRONTEND DEVELOPER
        </h2>

        <p className="fs-5 fw-normal text-light lh-lg mb-4">
          I build clean, responsive, and user-friendly websites using
          modern web technologies.
        </p>

        <div className="hero-buttons">
          <a
            href="#contact"
            className="btn btn-primary rounded-5  text-white px-4 mx-3 py-2"
          >
            Hire Me <ArrowRight size={16} />
          </a>

          <a
            href="#projects"
            className="btn rounded-3 btn-sm text-white  px-4 py-2"
          >
            View My Projects
          </a>
        </div>

      </div>
    </section>
  );
}
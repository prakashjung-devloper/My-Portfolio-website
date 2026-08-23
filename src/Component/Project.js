import { ExternalLink, } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import React from "react";


export default function Projects() {
  return (
    <section id="projects" className="container py-5">

      <h2 className="text-center mb-5 text-info">
        My Projects
      </h2>

      <div className="row g-4">

        {/* Project 1 */}
        <div className="col-12 col-md-6">
          <div className="project-card h-100">

            <img
              src="broadway.png"
              alt="Broadway Website Clone"
              className="img-fluid"
            />

            <div className="p-4">
              <h3>Broadway Website</h3>

              <p>
                A responsive website built using HTML, CSS
                and Bootstrap.
              </p>

              <p className="technology">
                HTML • CSS • Bootstrap
              </p>

              <a
                href=" https://prakashjung-devloper.github.io/broadway-website/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                <ExternalLink size={16} />
<span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="https://github.com/prakashjung-devloper/broadway-website"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                <FaGithub size={16}/>
               <span className="mx-2"> GitHub</span>
              </a>
            </div>

          </div>
        </div>


        {/* Project 2 */}
        <div className="col-12 col-md-6">
          <div className="project-card h-100">

            <img
              src="blanxer.png"
              alt="Blanxer Website"
              className="img-fluid"
            />

            <div className="p-4">
              <h3>Blanxer Website</h3>

              <p>
                A responsive website created using HTML,
                CSS and Bootstrap.
              </p>

              <p className="technology">
                HTML • CSS • Bootstrap
              </p>

              <a
                href="https://prakashjung-devloper.github.io/Blanxer-Clone/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                                <ExternalLink size={16} />

              <span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="https://github.com/prakashjung-devloper/Blanxer-Clone.git"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
<FaGithub size={16}/>
               <span className="mx-2"> GitHub</span>      
                       </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
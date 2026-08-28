import { ExternalLink, } from "lucide-react";
import { FaGithub} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
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
              src="travel.png"
              alt="Travel Website "
              className="img-fluid"
            />

            <div className="p-4">
              <h3>Travel Website</h3>

              <p>
                A responsive website built in Next.js
               .
              </p>

              <p className="technology">
                React • Next.js
              </p>

              <a
                href=" https://prakashjung-devloper.github.io/Travel-web/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                <ExternalLink size={16} />
<span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="https://github.com/prakashjung-devloper/Travel-web.git"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                <SiVercel size={16}/>
               <span className="mx-2"> GitHub</span>
              </a>
            </div>

          </div>
        </div>


        {/* Project 2 */}
        <div className="col-12 col-md-6">
          <div className="project-card h-100">

            <img
              src="APEx.png"
              alt="Corporate Website"
              className="img-fluid"
            />

            <div className="p-4">
              <h3>Corporate Website</h3>

              <p>
                A responsive website built in Next.js
              </p>

              <p className="technology">
                JS • React • Next.js
              </p>

              <a
                href="https://corporate-web-virid.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                                <ExternalLink size={16} />

              <span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="https://corporate-h6b607fuu-prakas-h-jung-kadayat-developer.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
<FaGithub size={16}/>
               <span className="mx-2"> vercel</span>      
                       </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
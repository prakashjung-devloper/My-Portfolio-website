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
              This is a responsive travel website I built using Next.js and React while learning modern frontend development.
               I focused on creating a clean, user-friendly layout and made sure the site works smoothly across mobile, tablet, and desktop screens.
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
              src="APEx.png"
              alt="Corporate Website"
              className="img-fluid"
            />

            <div className="p-4">
              <h3>Corporate Website</h3>

              <p>
                A responsive corporate website built with JavaScript, React, and Next.js, designed to give businesses a clean,
                 professional online presence. Optimized for mobile, tablet, and desktop with smooth navigation and modern UI.
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
<SiVercel size={16}/>
               <span className="mx-2"> vercel</span>      
                       </a>
            </div>

          </div>
        </div>



  {/* Project 3 */}
        <div className="col-12 col-md-6">
          <div className="project-card h-100">

            <img
              src="news.png"
              alt="News Portal Website"
              className="img-fluid"
            />

            <div className="p-4">
              <h3>News Website</h3>

              <p>
A responsive news website built with JavaScript, React, and Next.js, featuring organized article layouts and category-based navigation. 
Optimized for fast loading and smooth browsing across mobile, tablet, and desktop.              </p>

              <p className="technology">
                JS • React • Next.js
              </p>

              <a
                href="https://news-website-sable-zeta.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                                <ExternalLink size={16} />

              <span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="news-website-git-main-prakas-h-jung-kadayat-developer.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
<SiVercel size={16}/>
               <span className="mx-2"> vercel</span>      
                       </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
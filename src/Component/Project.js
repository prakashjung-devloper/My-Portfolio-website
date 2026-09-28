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
        <div className="col-12 col-md-4">
          <div className="project-card h-100">

            <img
              src="travel.png"
              alt="Travel  "
              className="img-fluid"
            />

            <div className="p-3 text-white">
              <h3> Website</h3>

              <p>
              A travel website for exploring destinations and planning trips. Clean layout that works smoothly on mobile, tablet, and desktop.
              </p>

              <p className="technology">
                 • Next.js
              </p>

              <a
                href=" https://prakashjung-devloper.github.io/Travel-web/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mx-2  "
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
        <div className="col-12 col-md-4">
          <div className="project-card h-100">

            <img
              src="APEx.png"
              alt="Corporate "
              className="img-fluid"
            />

            <div className="p-4 text-white">
              <h3>Landing page</h3>

              <p>A professional Landing page for a company, with sections for services, about, and contact. Simple navigation and a clean look on every screen size.
              </p>

              <p className="technology">
                • Next.js
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
        <div className="col-12 col-md-4">
          <div className="project-card h-100">

            <img
              src="news.png"
              alt="News Portal "
              className="img-fluid"
            />

            <div className="p-4 text-white">
              <h3> Website</h3>

              <p>A news website that loads real articles from an API. Readers can browse by category, and the layout stays easy to read on any device.             </p>

              <p className="technology">
                • Next.js
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

        {/* Project 4 */}

          <div className="col-12 col-md-4">
          <div className="project-card h-100">

            <img
              src="ecommerce.png"
              alt="Ecommerce"
              className="img-fluid"
            />

            <div className="p-4 text-white">
              <h3> Website</h3>

              <p>A full-stack online store. Product data comes from an API, and orders and user data are saved in a Supabase database. Built to work on mobile, tablet, and desktop       </p>

              <p className="technology">
                 • Next.js
              </p>

              <a
                href="https://ecommerce-website-omega-teal.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                                <ExternalLink size={16} />

              <span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="ecommerce-website-azrob6bsk-prakas-h-jung-kadayat-developer.vercel.app"
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

 {/* project 5 */}

        <div className="col-12 col-md-4">
          <div className="project-card h-100">
            <img src="cafee.png" alt="cafee web"className="img-fluid"/>
 
 
            <div className="p-3 text-white">
              <h3>  landing page</h3>

              <p>A modern landing page for a coffee shop, built with HTML5 and Tailwind CSS. Shows the menu, about, and contact sections in a fast, responsive layout.              </p>

              <p className="technology">
                 • HTML&Tailwind-CSS
              </p>

              <a
                href="https://prakashjung-devloper.github.io/cafee/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mx-2"
              >
                                <ExternalLink size={16} />

              <span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="https://github.com/prakashjung-devloper/cafee.git"
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


 {/* project 6 */}

          <div className="col-12 col-md-4">
          <div className="project-card h-100">
            <img src="fitness.png" alt="cafee web"className="img-fluid"/>
 
 
            <div className="p-3 text-white">
              <h3>  landing page</h3>

              <p>A bold landing page for a gym, built with Next.js and Tailwind CSS. Highlights programs and membership with a clear call to action.  </p>

              <p className="technology">
                 • HTML&Tailwind-CSS
              </p>

              <a
                href="https://prakashjung-devloper.github.io/fitness/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mx-2"
              >
                                <ExternalLink size={16} />

              <span className="mx-2">Live Demo</span>  
              </a>

              <a
                href="https://github.com/prakashjung-devloper/fitness.git"
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
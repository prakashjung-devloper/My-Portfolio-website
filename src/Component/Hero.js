import { ArrowRight, } from "lucide-react";

export default function Hero() {

  return (

     <div className="container">
       <h1 className="display-6 display-md-4 display-lg-3 fs-1 fw-medium text-light mt-5 mb-2">
  Hi, I'm <span style={{color: "#60A5FA"}}> Prakash</span> Jung
</h1>

<h2 className="fw-bold h-md-4 fs-1 text-white lh-1 mb-3">
  FRONTEND DEVELOPER
</h2>

<p className="fs-5 fw-normal text-light lh-lg mb-5">
  I build clean, responsive, and user-friendly websites using modern web technologies.
</p>
                <a href="#contact" 
                className="btn rounded-pill text-white px-4 mt-5  py-2 mx-4">Hire Me <ArrowRight size={16}/></a>


        <a href="#projects"  className="btn rounded-pill text-white px-4 mt-5 py-2 "> View My Projects

</a>
                
           </div>

  );
}


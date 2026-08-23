import { Gauge, MessageCircle, ScanSearch, ExternalLink, UserRound } from "lucide-react";

export default function About() {
  return (

   <section id="about" className="py-5 mt-5" >
     <div className="container py-5 ">
      <div className="row">
         <div className="col-lg-8">
  
  <p className="get-know text-info fw-semibold  mb-2"><UserRound size={19}  color="#38bdf8"/>
  <span className=" mx-2 ">Get to know me</span>
  </p>

  <h2 className="display-5 fw-bold text-white mb-3">
          About Me
        </h2>

  <p className="fs-5 text-light lh-lg mb-3">I'm Prakash, a Frontend Developer from Nepal focused on building clean, responsive, and interactive websites.
    I work with HTML, CSS, Bootstrap, JavaScript, and Next.js. I believe in learning by building and continuously improving
     my skills through real-world projects. </p>



     {/* details & nature about me */}

<div className="detail-card">
  <h2 className="detail-title mx-2"> <ScanSearch size={20}/>


  <span className="mx-2">
   Detail Oriented

</span>

</h2>
  <p className="px-4">
    I pay attention to the small details to create clean,
    consistent, and user-friendly interfaces.
  </p>
</div>

<div className="Performance-card">
   <h5 className="Performance-title"> <Gauge size={20}/>

   <span className="mx-2">
         Performance First
</span>
   
   </h5>
   <p  className="px-4">I focus on building efficient,and responsive websites by using Next.js and other tools.</p>
</div>

<div className="communicator-card">
   <h5 className="communicator-title">  <MessageCircle size={20}/>

<span className="mx-2">
   Clear Communicator
</span>

   </h5>
   <p  className="px-4">I communicate ideas, requirements, and progress clearly and simply.</p>

</div>

</div>
</div>
     </div> 
    </section>
   
  );
}

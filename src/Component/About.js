
import React from 'react';
import { Gauge, MessageCircle, ScanSearch, UserRound } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-5 mt-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          <div className="col-12 col-lg-6">
            
            <p className="get-know text-info fw-semibold mb-2 d-flex align-items-center">
              <UserRound size={19} color="#38bdf8"/>
              <span className="mx-2">Get to know me</span>
            </p>

            <h2 className="display-5 fw-bold text-white mb-3">
              About Me
            </h2>

            <p className="fs-5 text-white-50 lh-lg mb-4">
              I'm Prakash, a Frontend Developer from Nepal focused on building clean, responsive, and interactive websites.
              I work with HTML, CSS, Bootstrap, JavaScript, and Next.js. I believe in learning by building and continuously improving
              my skills through real-world projects.
            </p>

            <div className="d-flex flex-column gap-3">
              
              <div className="detail-card p-3 rounded-4">
              
                <h5 className="detail-title text-white d-flex align-items-center mb-2"> 
                  <ScanSearch size={20} className="text-info"/>
                  <span className="mx-2">Detail Oriented</span>
                </h5>
                <p className="text-white-50 small m-0 ps-4">
                  I pay attention to the small details to create clean, consistent, and user-friendly interfaces.
                </p>
              </div>

              <div className="Performance-card p-3 rounded-4" >
             
                <h5 className="Performance-title text-white d-flex align-items-center mb-2"> 
                  <Gauge size={20} className="text-success"/>
                  <span className="mx-2">Performance First</span>
                </h5>
                <p className="text-white-50 small m-0 ps-4">
                  I focus on building efficient and responsive websites by using Next.js and other tools.
                </p>
              </div>

              <div className="communicator-card p-3 rounded-4"  >
            
                <h5 className="communicator-title text-white d-flex align-items-center mb-2">  
                  <MessageCircle size={20} className="text-warning"/>
                  <span className="mx-2">Clear Communicator</span>
                </h5>
                <p className="text-white-50 small m-0 ps-4">
                I bridge the gap between complex code clear progress updates and explaining technical concepts in a simple.
                </p>
              </div>

            </div>

          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div style={{ width: '100%', maxWidth: '400px', height: '400px', position: 'relative' }}>
              <img 
                src="/My-Portfolio-website/animated.png" 
                className="continuous-move-avatar"
                alt="Prakash Jung Kadayat" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '20px',
                }} 
              />
            </div>
          </div>

        </div>
      </div> 
    </section>
  );
}

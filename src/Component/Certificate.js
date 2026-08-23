import React from "react";

export default function Certificate() {
  return (
    <section id="certificates" className="container py-5">

      <h2 className="text-center mb-5">
        My Certificates
      </h2>

      <div className="row g-4">

        {/* Certificate 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="certificate-card ">

            <img
              src="certificate.png"
              alt="Frontend Development Certificate"
            />

            <div className="certificate-content">
              <h4>Web Development</h4>

              <p className="issuer">
                Broadway Infosys
              </p>

              <p>
                HTML, CSS, JavaScript, Bootstrap,React & Next.js
              </p>

              <a
                href="certificate1.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-3"
              >
                View Certificate
              </a>
            </div>

          </div>
        </div>
        

      </div>

    </section>
  );
}
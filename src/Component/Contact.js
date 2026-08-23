import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, } from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_l1l0ldx",
        "template_9vd4c52",
        form.current,
        {
          publicKey: "Qe9e2WSOUmxbN5_-R",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="container py-5">

      <h2 className="text-center mb-5">
        Contact Me
      </h2>

      <div className="row g-5 align-items-center">


        {/* Contact Information */}
        <div className="col-12 col-md-5">

          <h3>Let's Work Together</h3>

          <p className="text-secondary">
            Have a project in mind? Feel free to contact me.
            I would be happy to discuss your idea.
          </p>

          {/* Location */}
          <div className="contact-info">
            <MapPin size={22} />
            <div>
              <small>Location</small>
              <p>Bardiya, Nepal</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-info">
            <Mail size={22} />
            <div>
              <small>Email</small>
              <p>
                <a href="mailto:jungprakash426@gmail.com">
                  jungprakash426@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* GitHub */}
          <div className="contact-info">
            <FaGithub size={22} />
            <div>
              <small>GitHub</small>
              <p>
                <a
                  href="https://github.com/prakashjung-devloper"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/prakashjung-devloper
                </a>
              </p>
            </div>
          </div>

        </div>


        {/* Contact Form */}
        <div className="col-12 col-md-7">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="mb-3">
              <label className="form-label">
                Name
              </label>

              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>


            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>


            <div className="mb-3">
              <label className="form-label">
                Subject
              </label>

              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Project Subject"
                required
              />
            </div>


            <div className="mb-3">
              <label className="form-label">
                Message
              </label>

              <textarea
                name="message"
                className="form-control"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="btn btn-primary rounded-pill px-4"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-3">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}
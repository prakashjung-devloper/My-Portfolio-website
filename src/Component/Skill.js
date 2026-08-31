
import { useState } from "react";

export default function Skill() {

  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    {
      name: "HTML5",
      short: "HTML",
      description: "Semantic markup & structure",
      category: "Foundation",
      status: "Comfortable",
    },
    {
      name: "CSS3",
      short: "CSS",
      description: "Layouts, Flexbox & Grid",
      category: "Foundation",
      status: "Comfortable",
    },
    {
      name: "Bootstrap",
      short: "BS5",
      description: "Responsive UI components",
      category: "Styling",
      status: "Comfortable",
    },
    {
      name: "JavaScript",
      short: "JS",
      description: "Interactive web functionality",
      category: "Foundation",
      status: "Intermediate",
    },
   
    {
      name: "React",
      short: "Re",
      description: "Component-based UI development",
      category: "Libraries",
      status: "Comfortable",
    },
    {
      name: "Next.js",
      short: "Next",
      description: "Modern React applications",
      category: "Frameworks",
      status: "Comfortable",
    },
  ];

  const categories = [
    "All",
    "Foundation",
    "Styling",
    "Libraries",
    "Frameworks",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skill" className="py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge rounded-pill px-3 py-2 mb-3">
            SKILLS
          </span>

          <h2 className="display-4 fw-bold text-white">
            What I Know
          </h2>

          <p className="text-secondary mx-auto" style={{ maxWidth: "550px" }}>
            I'm still learning — here's an honest look at where
            I stand with each technology.
          </p>

        </div>


        {/* Category Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn rounded-pill px-4 ${
                activeCategory === category
                  ? "btn-primary"
                  : "btn-dark border-secondary"
              }`}
            >
              {category}
            </button>
          ))}

        </div>


        {/* Skill Cards */}
        <div className="row g-4">

          {filteredSkills.map((skill, index) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={index}
            >

              <div className="skill-card p-4 h-100">

                {/* Top */}
                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div className="skill-icon">
                    {skill.short}
                  </div>

                  <span className="skill-status">
                    {skill.status}
                  </span>

                </div>


                {/* Name */}
                <h3 className="fs-4 fw-bold text-white mb-1">
                  {skill.name}
                </h3>

                <p className="text-secondary mb-3">
                  {skill.description}
                </p>



                {/* Bottom */}
                <div className="d-flex justify-content-between">

                  <small className="text-secondary">
                    {skill.category}
                  </small>

                  <small className="text-info fw-bold">
                  </small>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}


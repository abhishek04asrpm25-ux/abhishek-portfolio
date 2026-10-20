import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Leaf,
  Cpu
} from "lucide-react";

function Projects() {
  const projects = [
    {
      number: "01",
      featured: true,
      category: "SMART AUTOMATION",
      title: "KrishiConnect",
      description:
        "A digital procurement platform designed to help farmers find suitable procurement centers, understand schedules and track the procurement process more clearly.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Backend"
      ],
      icon: Leaf,
      status: "SMART AGRICULTURE",
      github: "#",
      live: "#"
    },
    {
      number: "02",
      featured: false,
      category: "WEB DEVELOPMENT",
      title: "Personal Portfolio",
      description:
        "A modern multi-page portfolio designed around my journey across electronics, software development and artificial intelligence.",
      technologies: [
        "React",
        "JavaScript",
        "Framer Motion",
        "CSS"
      ],
      icon: Sparkles,
      status: "IN DEVELOPMENT",
      github: "#",
      live: "#"
    },
    {
      number: "03",
      featured: false,
      category: "ELECTRONICS",
      title: "Circuit Simulation",
      description:
        "Exploring circuit analysis and simulation through practical electronics problems using engineering simulation tools.",
      technologies: [
        "PSpice",
        "OrCAD",
        "Circuit Analysis"
      ],
      icon: Cpu,
      status: "ENGINEERING",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="projects-page section">

      <div className="page-container">

        {/* HEADER */}

        <motion.div
          className="projects-header"
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
        >

          <div className="section-label">
            03 / Projects
          </div>

          <h1 className="projects-title">
            Things I've
            <br />
            <span>built.</span>
          </h1>

          <p className="projects-intro">
            A collection of experiments, engineering projects and
            digital products I've worked on while learning how to
            turn ideas into useful technology.
          </p>

        </motion.div>


        {/* PROJECTS */}

        <div className="projects-list">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (
              <motion.article
                className={`project-item ${
                  project.featured ? "featured" : ""
                }`}
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 50
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7
                }}
              >

                {/* PROJECT VISUAL */}

                <div className="project-visual">

                  <div className="project-grid" />

                  <div className="project-glow" />

                  <div className="project-icon-large">
                    <Icon size={70} strokeWidth={1} />
                  </div>

                  <span className="project-visual-number">
                    PROJECT {project.number}
                  </span>

                  <div className="project-status">
                    <span />
                    {project.status}
                  </div>

                </div>


                {/* PROJECT INFORMATION */}

                <div className="project-information">

                  <div className="project-top">

                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-number">
                      {project.number}
                    </span>

                  </div>

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {project.description}
                  </p>


                  {/* TECHNOLOGIES */}

                  <div className="project-technologies">

                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>


                  {/* ACTIONS */}

                  <div className="project-actions">

                    <a
                      href={project.github}
                      className="project-link"
                    >
                      <span>GITHUB</span>
                    </a>

                    <a
                      href={project.live}
                      className="project-link primary"
                    >
                      <span>LIVE PROJECT</span>
                      <ArrowUpRight size={17} />
                    </a>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* PROJECT PHILOSOPHY */}

        <motion.div
          className="project-philosophy"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 0.8
          }}
        >

          <div className="project-philosophy-number">
            03
          </div>

          <div>

            <div className="section-label">
              BUILDING PHILOSOPHY
            </div>

            <h2>
              Learn.
              <span> Build.</span>
              <br />
              Improve.
            </h2>

          </div>

          <p>
            Every project is an opportunity to understand something
            more deeply. I focus on building practical solutions,
            learning from problems and improving the result with
            every iteration.
          </p>

        </motion.div>


        {/* END LINE */}

        <div className="projects-endline">
          <span>MORE PROJECTS COMING SOON</span>
          <div />
          <span>01 — ∞</span>
        </div>

      </div>

    </section>
  );
}

export default Projects;
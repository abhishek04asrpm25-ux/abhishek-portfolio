import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  BrainCircuit,
  Database,
  Wrench,
  ArrowUpRight
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Programming",
      description:
        "Languages and fundamentals I use to solve problems and build applications.",
      icon: Code2,
      skills: ["C", "C++", "JavaScript", "Python", "Data Structures"]
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Technologies I use to create responsive and interactive web experiences.",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    },
    {
      number: "03",
      title: "AI / Machine Learning",
      description:
        "Exploring intelligent systems and learning how AI can solve practical problems.",
      icon: BrainCircuit,
      skills: ["Python", "Machine Learning", "AI Concepts", "Data Analysis"]
    },
    {
      number: "04",
      title: "Electronics",
      description:
        "My engineering foundation and the hardware side of technology.",
      icon: Cpu,
      skills: [
        "Digital Electronics",
        "Analog Electronics",
        "Circuit Analysis",
        "Communication Systems"
      ]
    },
    {
      number: "05",
      title: "Tools & Workflow",
      description:
        "Tools that support my development, learning and project workflow.",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Vite", "Figma"]
    },
    {
      number: "06",
      title: "Backend & Data",
      description:
        "Growing my understanding of server-side development and data systems.",
      icon: Database,
      skills: ["APIs", "Backend Fundamentals", "Databases", "JSON"]
    }
  ];

  return (
    <main className="skills-page">

      <div className="skills-background" />

      <div className="page-container">

        {/* HEADER */}

        <motion.section
          className="skills-hero"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div>

            <div className="section-label">
              02 / Skills
            </div>

            <h1 className="skills-title">
              What I
              <br />
              <span>work with.</span>
            </h1>

          </div>

          <div className="skills-intro">

            <p>
              A growing toolkit built through coursework,
              personal projects, experimentation and
              continuous learning.
            </p>

            <span>
              ECE → SOFTWARE → AI
            </span>

          </div>

        </motion.section>


        {/* SKILL GRID */}

        <section className="skills-grid">

          {skillGroups.map((group, index) => {

            const Icon = group.icon;

            return (
              <motion.article
                className={`skill-card ${
                  index === 1 ? "skill-card-featured" : ""
                }`}
                key={group.number}
                initial={{
                  opacity: 0,
                  y: 35
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.15
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07
                }}
              >

                <div className="skill-card-top">

                  <span className="skill-number">
                    {group.number}
                  </span>

                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>

                </div>


                <div className="skill-card-content">

                  <h2>
                    {group.title}
                  </h2>

                  <p>
                    {group.description}
                  </p>

                </div>


                <div className="skill-tags">

                  {group.skills.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>


                <div className="skill-card-footer">

                  <span>
                    EXPLORE
                  </span>

                  <ArrowUpRight size={16} />

                </div>

              </motion.article>
            );
          })}

        </section>


        {/* LEARNING SECTION */}

        <motion.section
          className="skills-learning"
          initial={{
            opacity: 0,
            y: 35
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >

          <div className="learning-left">

            <span className="section-label">
              CURRENT DIRECTION
            </span>

            <h2>
              Still learning.
              <br />
              <span>Always building.</span>
            </h2>

          </div>


          <div className="learning-right">

            <p>
              I don't see my skills as a finished list.
              I'm continuously improving my programming,
              development and problem-solving abilities
              while exploring AI and advanced technologies.
            </p>

            <div className="learning-line">

              <span>NOW</span>

              <div className="learning-track">

                <motion.div
                  className="learning-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: "68%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2
                  }}
                />

              </div>

              <span>NEXT</span>

            </div>

          </div>

        </motion.section>


        {/* BOTTOM LINE */}

        <div className="skills-bottom-line">

          <span>
            SKILLS / 2026
          </span>

          <span>
            LEARN · BUILD · IMPROVE
          </span>

        </div>

      </div>

    </main>
  );
}

export default Skills;
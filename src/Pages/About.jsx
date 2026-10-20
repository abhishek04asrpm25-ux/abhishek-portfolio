import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Cpu,
  BrainCircuit,
  Trophy
} from "lucide-react";

import profileImage from "../assets/Profile/ABHISHEK.jpeg";

function About() {
  const interests = [
    {
      icon: Code2,
      number: "01",
      title: "Software Development",
      text: "Building practical web applications and strengthening my programming and problem-solving skills."
    },
    {
      icon: BrainCircuit,
      number: "02",
      title: "AI / Machine Learning",
      text: "Exploring artificial intelligence and learning how intelligent systems can solve real-world problems."
    },
    {
      icon: Cpu,
      number: "03",
      title: "Electronics",
      text: "Using my ECE background to understand systems where hardware and software come together."
    }
  ];

  return (
    <main className="about-page">

      <div className="page-container">

        {/* HEADER */}

        <motion.section
          className="about-hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >

          <div>

            <div className="section-label">
              01 / About
            </div>

            <h1 className="about-title">
              More than
              <br />
              <span>just code.</span>
            </h1>

          </div>

          <p className="about-hero-intro">
            I'm an Electronics & Communication Engineering
            student building my path toward software
            development and artificial intelligence.
          </p>

        </motion.section>


        {/* PROFILE SECTION */}

        <section className="about-profile">

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-image-frame">

              <span className="about-image-tag">
                PROFILE / 01
              </span>

              <img
                src={profileImage}
                alt="Abhishek Kumar"
                className="about-profile-image"
              />

              <div className="about-image-caption">
                <span>ABHISHEK KUMAR</span>
                <span>ECE STUDENT</span>
              </div>

            </div>

          </motion.div>


          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="about-small-label">
              A LITTLE ABOUT ME
            </span>

            <h2>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </h2>

            <p>
              I'm currently pursuing a B.Tech in Electronics
              & Communication Engineering. My academic
              background gives me a strong foundation in
              electronics and communication systems, while
              my growing interest in software has pushed me
              toward programming, web development and
              artificial intelligence.
            </p>

            <p>
              I enjoy learning by building. Instead of only
              studying concepts, I try to turn what I learn
              into practical projects and experiments.
            </p>

            <p>
              My long-term goal is to become a strong
              software developer while continuing to explore
              AI and the intersection between software and
              electronics.
            </p>

            <a
              href="/projects"
              className="about-project-link"
            >
              Explore my projects
              <ArrowUpRight size={17} />
            </a>

          </motion.div>

        </section>


        {/* ACADEMIC STRIP */}

        <motion.section
          className="about-academic"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="academic-heading">

            <span>
              ACADEMIC SNAPSHOT
            </span>

            <p>
              The foundation I'm building on.
            </p>

          </div>


          <div className="academic-items">

            <div className="academic-item">

              <GraduationCap size={21} />

              <div>
                <span>DEGREE</span>
                <strong>B.Tech — ECE</strong>
              </div>

            </div>


            <div className="academic-item">

              <Trophy size={21} />

              <div>
                <span>CGPA</span>
                <strong>8.86 / 10</strong>
              </div>

            </div>


            <div className="academic-item">

              <Code2 size={21} />

              <div>
                <span>FOCUS</span>
                <strong>Software + AI</strong>
              </div>

            </div>

          </div>

        </motion.section>


        {/* INTERESTS */}

        <section className="about-interests">

          <motion.div
            className="about-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div>

              <span className="section-label">
                02 / What I explore
              </span>

              <h2>
                Three directions.
                <br />
                <span>One journey.</span>
              </h2>

            </div>

            <p>
              I'm interested in the space where technology,
              engineering and creativity meet.
            </p>

          </motion.div>


          <div className="interest-grid">

            {interests.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.article
                  className="interest-card"
                  key={item.number}
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
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                >

                  <div className="interest-top">

                    <span>
                      {item.number}
                    </span>

                    <Icon size={22} />

                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                  <div className="interest-arrow">
                    <ArrowUpRight size={18} />
                  </div>

                </motion.article>
              );
            })}

          </div>

        </section>


        {/* PERSONAL STATEMENT */}

        <motion.section
          className="about-statement"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="statement-mark">
            “
          </span>

          <h2>
            Learn something.
            <br />
            Build something.
            <br />
            <span>Make it useful.</span>
          </h2>

          <p>
            That's the mindset I want to carry into every
            project I work on.
          </p>

        </motion.section>


        {/* BOTTOM */}

        <div className="about-bottom-line">

          <span>
            ABHISHEK KUMAR
          </span>

          <span>
            ECE → SOFTWARE → AI
          </span>

        </div>

      </div>

    </main>
  );
}

export default About;
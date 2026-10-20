import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cpu,
  Sparkles
} from "lucide-react";

import profileImage from "../assets/Profile/ABHISHEK.jpeg";

function Home() {
  return (
    <main className="home-page">

      {/* BACKGROUND GRID */}

      <div className="home-grid-background" />

      {/* FLOATING ORBIT */}

      <motion.div
        className="home-orbit orbit-one"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="home-orbit orbit-two"
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="page-container">

        {/* HERO */}

        <section className="home-hero">

          {/* LEFT */}

          <motion.div
            className="home-content"
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
          >

            <div className="home-eyebrow">

              <span className="home-status-dot" />

              AVAILABLE FOR OPPORTUNITIES

            </div>


            <p className="home-small-text">
              HELLO, I'M
            </p>


            <h1 className="home-title">
              Abhishek
              <span>Kumar.</span>
            </h1>


            <div className="home-role">

              <span>
                Electronics & Communication
              </span>

              <span className="home-role-dot">
                ×
              </span>

              <span>
                Software & AI
              </span>

            </div>


            <p className="home-description">
              I’m an ECE student who enjoys turning ideas
              into practical digital experiences while
              exploring software development, artificial
              intelligence and electronics.
            </p>


            {/* BUTTONS */}

            <div className="home-actions">

              <a
                href="/projects"
                className="home-primary-button"
              >
                View my work
                <ArrowUpRight size={17} />
              </a>


              <a
                href="/contact"
                className="home-secondary-button"
              >
                Let's connect
              </a>

            </div>


            {/* QUICK SKILLS */}

            <div className="home-quick-skills">

              <div>
                <Code2 size={17} />
                <span>DEVELOP</span>
              </div>

              <div>
                <Cpu size={17} />
                <span>ENGINEER</span>
              </div>

              <div>
                <Sparkles size={17} />
                <span>EXPLORE</span>
              </div>

            </div>

          </motion.div>


          {/* RIGHT PHOTO */}

          <motion.div
            className="home-visual"
            initial={{
              opacity: 0,
              scale: 0.85
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.9,
              delay: 0.15
            }}
          >

            <div className="home-photo-frame">

              <div className="home-photo-number">
                01 / 01
              </div>

              <img
                src={profileImage}
                alt="Abhishek Kumar"
                className="home-profile-image"
              />

              <div className="home-photo-overlay" />

              <div className="home-photo-label">
                <span>ABHISHEK KUMAR</span>
                <span>ECE · DEVELOPER</span>
              </div>

            </div>


            {/* FLOATING CARD */}

            <motion.div
              className="home-floating-card"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >

              <span className="floating-card-dot" />

              <div>
                <strong>
                  Currently building
                </strong>

                <small>
                  software + AI projects
                </small>
              </div>

            </motion.div>

          </motion.div>

        </section>


        {/* BOTTOM SCROLL */}

        <motion.div
          className="home-scroll"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2
          }}
        >

          <span>
            SCROLL TO EXPLORE
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity
            }}
          >
            <ArrowDown size={17} />
          </motion.div>

        </motion.div>

      </div>

    </main>
  );
}

export default Home;
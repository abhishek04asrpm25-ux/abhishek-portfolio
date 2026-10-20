import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Cpu,
  BrainCircuit,
  Trophy,
  Rocket,
  ArrowDown
} from "lucide-react";

function Journey() {
  const milestones = [
    {
      year: "01",
      period: "FOUNDATION",
      title: "School Years",
      description:
        "Built a strong academic foundation while developing an interest in mathematics, science, technology and problem solving.",
      icon: GraduationCap,
      tags: ["Class 10", "Class 12", "Academics"]
    },
    {
      year: "02",
      period: "ENGINEERING",
      title: "B.Tech in ECE",
      description:
        "Started my engineering journey in Electronics and Communication Engineering, building fundamentals in electronics, circuits and engineering mathematics.",
      icon: Cpu,
      tags: ["ECE", "Electronics", "Engineering"]
    },
    {
      year: "03",
      period: "DISCOVERY",
      title: "Software Development",
      description:
        "Started exploring programming and web development, gradually moving from basic concepts to building practical digital experiences.",
      icon: Code2,
      tags: ["C++", "JavaScript", "Web Development"]
    },
    {
      year: "04",
      period: "EXPLORATION",
      title: "AI & Machine Learning",
      description:
        "Began exploring artificial intelligence, machine learning and data-driven problem solving as another direction alongside software development.",
      icon: BrainCircuit,
      tags: ["Python", "AI", "Machine Learning"]
    },
    {
      year: "05",
      period: "BUILDING",
      title: "Hackathons & Projects",
      description:
        "Started turning ideas into working projects and participating in technology challenges where engineering, creativity and problem solving come together.",
      icon: Trophy,
      tags: ["Hackathons", "Projects", "Problem Solving"]
    },
    {
      year: "06",
      period: "NEXT",
      title: "Building What's Next",
      description:
        "Continuing to strengthen DSA, software development, AI and electronics while working toward becoming a strong software engineer.",
      icon: Rocket,
      tags: ["DSA", "Software", "AI"]
    }
  ];

  return (
    <section className="journey-page section">

      <div className="page-container">

        {/* HEADER */}

        <motion.div
          className="journey-header"
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
            04 / Journey
          </div>

          <h1 className="journey-title">
            Still
            <br />
            <span>becoming.</span>
          </h1>

          <p className="journey-intro">
            My journey isn't a straight line. It moves between
            electronics, software, artificial intelligence and
            the curiosity to understand how things work.
          </p>

        </motion.div>


        {/* JOURNEY INTRO LINE */}

        <div className="journey-start">

          <span>START</span>

          <div className="journey-start-line">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                delay: 0.5
              }}
            />
          </div>

          <span>NOW</span>

        </div>


        {/* TIMELINE */}

        <div className="journey-timeline">

          <div className="journey-line" />

          {milestones.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.article
                className={`journey-item ${
                  index % 2 === 0
                    ? "journey-left"
                    : "journey-right"
                }`}
                key={item.year}
                initial={{
                  opacity: 0,
                  y: 60
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.25
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.05
                }}
              >

                <div className="journey-content">

                  <div className="journey-card-header">

                    <span className="journey-period">
                      {item.period}
                    </span>

                    <span className="journey-number">
                      {item.year}
                    </span>

                  </div>

                  <div className="journey-icon">
                    <Icon size={22} />
                  </div>

                  <h2>
                    {item.title}
                  </h2>

                  <p>
                    {item.description}
                  </p>

                  <div className="journey-tags">

                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="journey-node">
                  <span />
                </div>

              </motion.article>
            );
          })}

        </div>


        {/* FUTURE */}

        <motion.div
          className="journey-future"
          initial={{
            opacity: 0,
            scale: 0.96
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
        >

          <div className="journey-future-icon">
            <Rocket size={25} />
          </div>

          <div>

            <div className="section-label">
              WHAT'S NEXT
            </div>

            <h2>
              The best part
              <span> is still ahead.</span>
            </h2>

            <p>
              More projects. More experiments. More problems to
              solve. I'm still at the beginning of the journey,
              and that's exactly what makes it exciting.
            </p>

          </div>

          <ArrowDown className="journey-future-arrow" />

        </motion.div>


        {/* BOTTOM */}

        <div className="journey-bottom">

          <span>CURIOUS</span>

          <div />

          <span>BUILDING</span>

          <div />

          <span>EVOLVING</span>

        </div>

      </div>

    </section>
  );
}

export default Journey;
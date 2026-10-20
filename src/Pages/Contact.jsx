import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email="abhishek.25220@ece.du.ac.in";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="contact-page section">

      <div className="page-container">

        {/* HEADER */}

        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="section-label">
            05 / Contact
          </div>

          <h1 className="contact-title">
            Let's build
            <br />
            <span>something.</span>
          </h1>

          <p className="contact-intro">
            Have an idea, project, opportunity or simply want
            to connect? I'm always open to interesting
            conversations and new things to build.
          </p>

        </motion.div>


        {/* MAIN CONTACT AREA */}

        <div className="contact-grid">

          {/* EMAIL CARD */}

          <motion.div
            className="contact-email-card"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >

            <div className="contact-card-top">

              <div className="contact-icon">
                <Mail size={22} />
              </div>

              <span>
                GET IN TOUCH
              </span>

            </div>

            <p className="contact-card-label">
              Drop me a message
            </p>

            <a
              href={`mailto:${email}`}
              className="contact-email"
            >
              {email}
            </a>

            <button
              className="copy-email"
              onClick={copyEmail}
            >
              {copied ? (
                <>
                  <Check size={15} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={15} />
                  Copy email
                </>
              )}
            </button>

          </motion.div>


          {/* SOCIALS */}

          <motion.div
            className="contact-socials"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >

            <div className="contact-social-heading">
              <span>
                ELSEWHERE
              </span>

              <p>
                Find me around the web.
              </p>
            </div>


            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >

              <div className="social-left">

              <span className="social-brand github-brand">
  GH
</span>

                <div>
                  <strong>GitHub</strong>
                  <small>Projects & code</small>
                </div>

              </div>

              <ArrowUpRight size={19} />

            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >

              <div className="social-left">

              <span className="social-brand linkedin-brand">
  in
</span>

                <div>
                  <strong>LinkedIn</strong>
                  <small>Professional network</small>
                </div>

              </div>

              <ArrowUpRight size={19} />

            </a>

          </motion.div>

        </div>


        {/* MESSAGE AREA */}

        <motion.div
          className="contact-message"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="contact-message-number">
            01
          </div>

          <div className="contact-message-content">

            <span className="section-label">
              CURRENTLY
            </span>

            <h2>
              Learning.
              <br />
              Building.
              <br />
              Exploring.
            </h2>

            <p>
              I'm currently focused on strengthening my
              software development skills while exploring
              AI, machine learning and electronics.
            </p>

          </div>

          <div className="contact-status">

            <span className="status-dot" />

            Open to opportunities

          </div>

        </motion.div>


        {/* CTA */}

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div>

            <span>
              HAVE SOMETHING IN MIND?
            </span>

            <h2>
              Let's make it
              <em> real.</em>
            </h2>

          </div>

          <a
            href={`mailto:${email}`}
            className="contact-send"
          >
            <Send size={18} />
            Start a conversation
            <ArrowUpRight size={18} />
          </a>

        </motion.div>


        {/* FOOTER LINE */}

        <div className="contact-footer-line">

          <span>
            ABHISHEK KUMAR
          </span>

          <span>
            ECE · SOFTWARE · AI
          </span>

          <span>
            © 2026
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;
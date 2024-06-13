import React from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import instagram from "../contact logo/instagram.jpeg";
import linkedin from "../contact logo/linkedin.png";
import github from "../contact logo/github.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const date = new Date().getFullYear();
  const ref = useRef();

  const isInView = useInView(ref);
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ofanudc", "template_phlammg", formRef.current, {
        publicKey: "P-oivXsUidldFqMbZ",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="container"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textcontainer" variants={variants}>
          <motion.h1>
            Thank You for
            <br /> stopping by!
          </motion.h1>
          <motion.p variants={variants}>
            Whether you have a question, <br />
            talk about a project collaboration,
            <br />
            brainstorming or just want to say hi, my inbox is always open.
          </motion.p>
          <motion.div className="imgContainer" variants={variants}>
            <a href="https://www.linkedin.com/in/mehak-basrani-b444941a4/">
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={linkedin}
                alt=""
              />
            </a>
            <a href="https://github.com/mehakbasrani">
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={github}
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/rifff__life__23/">
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={instagram}
                alt=""
              />
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="form" variants={variants}>
          <motion.div
            className="svg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300px"
              height="300px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <motion.path
                d="M4 19L9 14M20 19L15 14M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z"
                stroke="orange"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ delay: 0.3, duration: 3 }}
              />
            </svg>
          </motion.div>
          <motion.form
            onSubmit={sendEmail}
            ref={formRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <input required type="text" placeholder="Name" name="name" />
            <input required type="email" placeholder="Mail" name="email" />
            <textarea
              required
              name="message"
              id="message"
              cols="50"
              rows="5"
              placeholder="Message"
            />
            <button type="submit">Send</button>
            {error && <p className="error">Ughh, Please try again!!</p>}
            {success && <p className="success">Thanks for Connecting!!</p>}
          </motion.form>
          <motion.div className="copyright" variants={variants}>
            <p>
              &copy;{date}
              <a href="https://github.com/mehakbasrani"> Mehak</a>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;

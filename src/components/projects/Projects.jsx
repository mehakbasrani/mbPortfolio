import React from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    imgsrc: "./gaanaBajaana.png",
    alt: "spotify",
    title: "Gaana Bajaana",
    quotes: "Want To Relax !?",
    description:
      "User can Login and interact with Spotify's streaming service..",
    link: "https://mehakbasrani.github.io/Gaana-Bajaana/",
  },
  {
    imgsrc: "./TravelGuide.png",
    alt: "Travel Guide",
    title: "Travel Guide",
    quotes: "Want To Travel !?",
    description:
      "User can find hotels, restaurants and places of attractions near their location.",
    link: "https://mehakbasrani.github.io/TravelGuide/",
  },
  {
    imgsrc: "./myBooking.png",
    alt: "Feel Like Home",
    title: "Feel Like Home",
    quotes: "Want To Feel Like Home Even When Travelling !?",
    description: "User can book rooms and have a comfortable stay. ",
    link: "https://github.com/mehakbasrani/bookingApp.git",
  },
  {
    imgsrc: "./drappointment.png",
    alt: "medicare",
    title: "Medicare",
    quotes: "Want to book doctor's appointment online !?",
    description: "User can login and book appointment with doctors. ",
    link: "https://659b0032480483c719fabc1f--spontaneous-salmiakki-7a19c3.netlify.app/",
  },
];

const SingleProject = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgcontainer" ref={ref}>
            <img src={project.imgsrc} alt={project.alt} />
          </div>
          <motion.div className="textcontainer" style={{ y }}>
            <h2>{project.title}</h2>
            <h5>{project.quotes}</h5>
            <p>{project.description}</p>
            <a href={project.link}>
              <button>SEE MORE</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="projects" ref={ref}>
      <div className="heading">
        <h1> Personal Projects</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {projects.map((project, index) => (
        <SingleProject project={project} key={index} />
      ))}
    </div>
  );
};

export default Projects;

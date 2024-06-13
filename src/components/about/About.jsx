import React, { useState, useRef } from "react";
import "./about.scss";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiMysql, SiGit, SiNextdotjs } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";

const experience = {
  icon: "abcd",
  title: "My Experiences",
  description: "qsdfghj",
  items: [
    {
      company: "Simran Websoft",
      position: "React Developer",
      duration: "March,2024 - May,2024",
    },
    {
      company: "Credanic",
      position: "Software Developer",
      duration: "March,2024 - May,2024",
    },
  ],
};

const education = {
  icon: "abcd",
  title: "My Education",
  description: "qsdfghj",
  items: [
    {
      institution: "International Institute of Professional Studies, DAVV",
      major: "M.Tech (IT)",
      duration: "July,2019 - May,2024",
      cgpa: "93%",
    },
    {
      institution: "St. Joseph's Convent Senior Secondary School",
      major: "XII",
      duration: "April,2017 - March,2019",
      cgpa: "93%",
    },
    {
      institution: "St. Joseph's Convent Senior Secondary School",
      major: "X",
      duration: "April,2016 - March,2017",
      cgpa: "93.1%",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "sdfgbh",
  skillSet: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "Javascript" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "ExpressJs" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "NodeJs" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiNextdotjs />, name: "NextJs" },
    { icon: <SiGit />, name: "Git" },
  ],
};

const about = {
  title: "About Me",
  description:
    "Detailed oriented , ambitious and committed engineer to be , with a get-it-done ,on-time, high-quality product spirit. I thrive on challenges and always look forward for an opportunity to do better and enhance my skills. A highly driven individual looking for a challenging position in an organisation specializing in tech to further work towards personal and professional development and will play to my strengths.",
};

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

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef();

  const tabs = [
    { title: "Experiences", content: experience },
    { title: "Education", content: education },
    { title: "Skills", content: skills },
    { title: "About Me", content: about },
  ];

  const renderContent = (content) => {
    if (content.items) {
      return (
        <div className="renderedContent">
          <h2 className="title">{content.title}</h2>
          <div className="excontainer">
            {content.items.map((item, index) => (
              <div key={index}>
                {item.company ? (
                  <div className="edudiv">
                    <h3>{item.company}</h3>
                    <p>{item.position}</p>
                    <p>{item.duration}</p>
                  </div>
                ) : (
                  <div className="edudiv">
                    <h3>{item.institution}</h3>
                    <p>{item.major}</p>
                    <p>{item.duration}</p>
                    <p>{item.cgpa}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    } else if (content.skillSet) {
      return (
        <div className="skillContainer">
          <h2 className="title">{content.title}</h2>
          <div className="skills-list">
            {content.skillSet.map((skill, index) => (
              <div className="skillItem" key={index} data-tip={skill.name}>
                {skill.icon}
              </div>
            ))}
            <Tooltip />
          </div>
        </div>
      );
    } else {
      return (
        <div className="aboutContainer">
          <h2 className="title">{content.title}</h2>
          <p className="desc">{content.description}</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="heading">
        <h3>why hire me?</h3>
      </div>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="tabs-container"
      >
        <motion.div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </motion.div>
        <motion.div className="tab-content">
          {renderContent(tabs[activeTab].content)}
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;

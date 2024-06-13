import "./navbar.scss";
import email from "../contact logo/email.jpeg";
import instagram from "../contact logo/instagram.jpeg";
import linkedin from "../contact logo/linkedin.png";
import github from "../contact logo/github.png";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const pdfUrl = "./resume.pdf";

  const openPdf = () => {
    console.log("clicked");
    window.open(pdfUrl, "_self");
  };

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mehak Basrani
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="buttons"
            onClick={openPdf}
          >
            Resume
          </motion.button>

          <a href="mailto:mehakbasrani17@gmail.com">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={email}
              alt=""
            />
          </a>
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
          <a href="https://www.instagram.com/__.mehak_basrani/">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={instagram}
              alt=""
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

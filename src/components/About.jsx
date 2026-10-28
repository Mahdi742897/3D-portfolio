import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-[94%]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-full"
      >
        <div className="command-card min-h-[280px] flex justify-evenly items-center flex-col p-8">
          <div className="size-20 rounded-full bg-black-200/50 flex items-center justify-center border border-secondary/10 mb-4">
            <img src={icon} alt="" className="size-10 object-contain" />
          </div>
          <h3 className="text-white text-[18px] font-bold text-center tracking-wide">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-justify text-[17px] leading-[30px] max-w-3xl"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I&apos;m a Front-End Developer with about three years of experience
        building and maintaining enterprise web applications in
        telecommunications. I specialize in React.js and Next.js, integrating
        REST APIs, and shipping complex business workflows in production. I also
        build full-stack apps with Node.js, Express.js, and PostgreSQL, and
        explore mobile development with React Native and Expo.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

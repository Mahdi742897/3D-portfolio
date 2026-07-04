import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { i } from "framer-motion/client";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit aperiam
          cum cumque accusantium eos fugit dolores esse incidunt iste dolorem
          deleniti rem molestiae perspiciatis maiores at, minima non fuga
          tempora. cum cumque accusantium eos fugit dolores esse incidunt iste
          dolorem deleniti rem molestiae perspiciatis maiores at, minima non
          fuga tempora.
        </motion.p>
        <div className="flex flex-wrap mt-20 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({
  name,
  description,
  index,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div className="w-full sm:w-[360px]" variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          spead: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl  w-full"
      >
        <div className="relative w-full h-[230px]"></div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(Works, "works");

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
    <motion.div
      className="w-[94%] sm:w-[360px]"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          spead: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl  w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="size-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient size-[20px] rounded-full flex justify-center items-center
               cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="size-[60%] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="">{name}</h3>
          <p>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");

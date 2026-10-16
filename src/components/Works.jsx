import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Selected work from enterprise telecommunications, full-stack product
          development, and mobile experiments. Demo and source links are shown
          only when they are publicly available.
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
  role,
  description,
  index,
  tags,
  image,
  imageFit,
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
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h-[230px] bg-black-200 rounded-2xl flex items-center justify-center">
          <img
            src={image}
            alt=""
            className={`size-[55%] ${imageFit === "contain" ? "object-contain" : "object-cover"}`}
          />
          {source_code_link ? (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} source code`}
                className="black-gradient size-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt=""
                  className="size-[60%] object-contain"
                />
              </a>
            </div>
          ) : null}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[23px]">{name}</h3>
          {role ? (
            <p className="mt-1 text-[#915eff] text-[13px] font-medium">{role}</p>
          ) : null}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag?.color}`}>
                #{tag?.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(Works, "projects");

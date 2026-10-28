import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { skillCategories } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", "spring", index * 0.1, 0.6)}
          >
            <h3 className="text-white text-[18px] font-semibold mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="command-tag px-4 py-2 text-[14px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

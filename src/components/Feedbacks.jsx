import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education, languages } from "../constants";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[220px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Background</p>
          <h2 className={`${styles.sectionHeadText}`}>Education & Languages</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-16 pb-14 flex flex-wrap gap-7`}
      >
        <motion.article
          variants={fadeIn("", "spring", 0, 0.75)}
          className="bg-black-100 p-8 rounded-3xl sm:w-[360px] w-full"
        >
          <p className="text-secondary text-[13px] uppercase tracking-wider">
            Education
          </p>
          <h3 className="text-white font-bold text-[20px] mt-3">
            {education.degree}
          </h3>
          <p className="mt-2 text-white-100 text-[15px]">{education.school}</p>
          <p className="mt-3 text-secondary text-[14px]">
            {education.date}
            <br />
            {education.status}
          </p>
        </motion.article>

        {languages.map((language, index) => (
          <motion.article
            key={language.name}
            variants={fadeIn("", "spring", (index + 1) * 0.2, 0.75)}
            className="bg-black-100 p-8 rounded-3xl sm:w-[240px] w-full"
          >
            <p className="text-secondary text-[13px] uppercase tracking-wider">
              Language
            </p>
            <h3 className="text-white font-bold text-[20px] mt-3">
              {language.name}
            </h3>
            <p className="mt-2 text-secondary text-[15px]">{language.level}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "education");

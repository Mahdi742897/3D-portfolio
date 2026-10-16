import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { contact } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">{contact.name.split(" ")[0]}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {contact.title} based in {contact.location}.
            <br className="sm:block hidden" /> I build production web apps with
            React and Next.js.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 pointer-events-auto">
            <a
              href="#contact"
              className="bg-tertiary py-3 px-6 rounded-xl text-white font-medium text-[16px] hover:text-white"
            >
              Get in touch
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="border border-secondary py-3 px-6 rounded-xl text-white font-medium text-[16px]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute sm:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="size-3.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

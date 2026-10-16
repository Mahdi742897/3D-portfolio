import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";
import { contact } from "../constants";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      return toast.error("Please fill in all fields");
    }

    if (name.length < 2) {
      return toast.error("Name is too short");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return toast.error("Invalid email address");
    }

    if (message.length < 10) {
      return toast.error("Message is too short");
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_ih6hdld",
        "template_ymd0iv7",
        {
          from_name: name,
          to_name: "Mahdi",
          from_email: email,
          to_email: contact.email,
          message,
        },
        "3OMTWchCdUs_Q9NOr",
      );

      toast.success("Message sent successfully!");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:my-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <address className="mt-6 not-italic flex flex-col gap-2 text-secondary text-[15px]">
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-white w-fit"
          >
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="hover:text-white w-fit">
            {contact.phone}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white w-fit"
          >
            github.com/Mahdi742897
          </a>
          <p>{contact.location}</p>
        </address>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col gap-2">
            <span className="text-white font-medium">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none text-white"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-medium">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              autoComplete="email"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none text-white"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-medium">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none text-white"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary cursor-pointer py-3 px-8 w-fit text-white font-bold rounded-xl disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1   xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

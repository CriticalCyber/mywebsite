import { motion } from "framer-motion";
import FancyButton from "../../../components/FancyButton";
import { FaPhone } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  childVariantFadeIn,
  parentVariantFadeIn,
} from "../../../utils/animationVarients";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="hero-section"
      variants={parentVariantFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg border overflow-hidden border-base-300"
    >
      <motion.div
        variants={childVariantFadeIn}
        className="w-fit flex items-center justify-center gap-2"
      >
        <div className="inline-grid *:[grid-area:1/1] mb-1">
          <div className="status status-sm status-accent animate-ping"></div>
          <div className="status status-sm status-accent"></div>
        </div>
        <small className="text-[12px] font-light text-base-content/50 mb-1">
          Welcome to my digital corner
        </small>
      </motion.div>

      <motion.h1
        variants={childVariantFadeIn}
        className="text-[32px] font-light mb-3"
      >
        Hi! I&apos;m Anubhav Gupta, <br /> a web engineer based in{" "}
        <strong className="z-10 font-bold">India 🇮🇳</strong>
      </motion.h1>
      <motion.p
        variants={childVariantFadeIn}
        className="text-base-content/60 text-[16px] font-light mb-3 leading-relaxed tracking-wide"
      >
        I'm a fresh graduate with a passion for{" "}
        <span className="text-base-content font-medium">
          web development and design
        </span>
        . As a newcomer to the industry, I'm eager to{" "}
        <span className="text-base-content font-medium">
          apply my skills and learn new technologies
        </span>
        .
      </motion.p>
      <motion.p
        variants={childVariantFadeIn}
        className="text-base-content/60 text-[16px] font-light leading-relaxed tracking-tight"
      >
        Ready to start my professional journey in tech. I bring{" "}
        <span className="text-base-content font-medium">
          Fresh Perspectives
        </span>{" "}
        and{" "}
        <span className="text-base-content font-medium">
          Enthusiasm to Learn and Grow
        </span>
        .
      </motion.p>

      <span className="my-3"></span>

      <motion.div
        variants={childVariantFadeIn}
        className="w-fit h-auto flex flex-wrap gap-3"
      >
        <FancyButton
          className={
            "w-30 btn-ghost bg-base-content text-base-100 border-transparent shadow-none"
          }
          onClick={() =>
            window.open(
              "tel:9079841105",
              "_self"
            )
          }
          text_1={"Let's talk"}
          icon_1={<FaPhone className="text-sm" />}
          text_2={"Book a call"}
          icon_2={<FaArrowRightLong className="text-sm" />}
        />
        <FancyButton
          className={
            "w-30 btn-ghost bg-base-100 text-base-content border-transparent shadow-none"
          }
          onClick={() => navigate("/about")}
          text_1={"Explore more"}
          text_2={"About me"}
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

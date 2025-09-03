import { motion } from "framer-motion";
import about_img5 from "../../assets/other/about-img-5.png";
import about_img6 from "../../assets/other/about-img-6.png";
import about_img7 from "../../assets/other/about-img-7.png";
import FloatingDocs from "../../components/FloatingDocs";
import { ImSteam } from "react-icons/im";
import { SiCodefresh } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { useEffect } from "react";
import { smoothScroller } from "../../utils/pageScrollers";
import {
  childVariantFadeIn,
  pageTransitionVariants,
  parentVariantFadeIn,
} from "../../utils/animationVarients";
import { ImagePreview } from "./components";

const AboutPage = () => {
  const navList = [
    {
      title: "Gaming Beginnings",
      sectionId: "become-gamer-section",
      icon: <ImSteam />,
    },
    {
      title: "Self-Learning Journey",
      sectionId: "become-programmer-section", 
      icon: <GiBrain />,
    },
    {
      title: "Learning & Growth",
      sectionId: "free-time-section",
      icon: <SiCodefresh />,
    },
  ];

  // hit top on page reload
  useEffect(() => smoothScroller("app-top"), []);

  return (
    <motion.section
      id="about-page"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
      >
        <ImagePreview
          id="become-gamer-section"
          caption="Where it all began"
          image={about_img7}
        />
        <motion.div
          variants={childVariantFadeIn}
          className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg overflow-hidden"
        >
          <h1 className="text-[14px] font-semibold">
            The Gaming Beginning
          </h1>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            Like many others, my journey began with gaming. Growing up in{" "}
            <span className="text-base-content">Dholpur, Rajasthan</span>, I found
            myself drawn to the world of video games. From the immersive streets of{" "}
            <a rel="noopener"
              href="https://www.rockstargames.com/games/vicecity"
              target="_blank"
              className="link link-accent"
            >
              GTA: Vice City
            </a>{" "}
            to the strategic gameplay of{" "}
            <a rel="noopener"
              href="https://www.minecraft.net/"
              target="_blank"
              className="link link-accent"
            >
              Minecraft
            </a>
            , these games shaped my early interests.
          </p>

          <p className="text-base-content/50 text-[14px] font-medium">
            Gaming wasn't just entertainment; it sparked my curiosity about how
            these digital worlds were created. Watching gaming streamers and content
            creators on{" "}
            <a rel="noopener"
              href="https://www.youtube.com"
              target="_blank"
              className="link link-accent"
            >
              YouTube
            </a>{" "}
            opened my eyes to the vast possibilities in the digital realm.
          </p>
        </motion.div>

        <ImagePreview
          id="become-programmer-section"
          caption="Self-Learning Journey"
          image={about_img6}
        />
        <motion.div
          variants={childVariantFadeIn}
          className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg overflow-hidden"
        >
          <h1 className="text-[14px] font-semibold">
            Discovering Programming Through Self-Learning
          </h1>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            My programming journey began when I discovered{" "}
            <a rel="noopener"
              href="https://www.freecodecamp.org/"
              target="_blank"
              className="link link-accent"
            >
              freeCodeCamp
            </a>
            . As a self-learner, I was amazed by the wealth of free resources
            available online. The world of{" "}
            <span className="text-base-content">web development</span> caught
            my attention immediately.
          </p>

          <p className="text-base-content/50 text-[14px] font-medium my-2">
            Through countless hours of tutorials, documentation reading, and
            practice projects, I began to understand the fundamentals of coding.
            Each small victory in making something work fueled my passion to
            learn more.
          </p>

          <p className="text-base-content/50 text-[14px] font-medium my-2">
            Currently pursuing my{" "}
            <span className="text-base-content">Master's degree</span>, I
            continue to enhance my skills through online platforms like{" "}
            <a rel="noopener"
              href="https://www.udemy.com/"
              target="_blank"
              className="link link-accent"
            >
              Udemy
            </a>{" "}
            and{" "}
            <a rel="noopener"
              href="https://www.youtube.com/"
              target="_blank"
              className="link link-accent"
            >
              YouTube
            </a>
            , building projects and learning new technologies along the way.
          </p>
        </motion.div>

        <ImagePreview
          id="free-time-section"
          caption="Continuous Learning"
          image={about_img5}
        />
        <motion.div
          variants={childVariantFadeIn}
          className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg overflow-hidden"
        >
          <h1 className="text-[14px] font-semibold">
            Growing as a Developer
          </h1>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            When I'm not studying or coding, I'm exploring the latest trends in
            technology through tech blogs and developer communities. Platforms
            like{" "}
            <a rel="noopener"
              href="https://dev.to/"
              target="_blank"
              className="link link-accent"
            >
              Dev.to
            </a>{" "}
            and{" "}
            <a rel="noopener"
              href="https://hashnode.com/"
              target="_blank"
              className="link link-accent"
            >
              Hashnode
            </a>{" "}
            have become my daily companions.
          </p>
          <p className="text-base-content/50 text-[14px] font-medium my-2">
            I'm fascinated by emerging technologies and enjoy experimenting with
            tools like{" "}
            <a rel="noopener"
              href="https://www.figma.com/"
              target="_blank"
              className="link link-accent"
            >
              Figma
            </a>{" "}
            for design and{" "}
            <a rel="noopener"
              href="https://github.com/"
              target="_blank"
              className="link link-accent"
            >
              GitHub
            </a>{" "}
            for version control and collaboration.
          </p>

          <p className="text-base-content/50 text-[14px] font-medium my-2">
            To maintain a healthy balance, I still enjoy casual gaming sessions
            and participate in online coding challenges on platforms like{" "}
            <a rel="noopener"
              href="https://www.codewars.com/"
              target="_blank"
              className="link link-accent"
            >
              Codewars
            </a>{" "}
            and{" "}
            <a rel="noopener"
              href="https://leetcode.com/"
              target="_blank"
              className="link link-accent"
            >
              LeetCode
            </a>
            , which help sharpen my problem-solving skills.
          </p>
        </motion.div>

        <FloatingDocs navList={navList} />
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;

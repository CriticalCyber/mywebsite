import { motion } from "framer-motion";
import profile_pic from "../assets/profile.jpg";
import { FaPhone } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import SectionHeadBtn from "./SectionHeadBtn";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import {
  childVariantFadeIn,
  childVariantReveal,
  parentVariantFadeIn,
  parentVariantReveal,
} from "../utils/animationVarients";

const Footer = () => {
  const navigate = useNavigate();

  const social_links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/cyberxanubhav/",
      username: "Anubhav Gupta",
      icon: <FaLinkedin />,
    },
    {
      title: "Github",
      url: "https://github.com/CriticalCyber",
      username: "Anubhav Gupta",
      icon: <TbBrandGithubFilled />,
    },
    {
      title: "Twitter",
      url: "https://x.com/cyberxanubhav",
      username: "Anubhav Gupta",
      icon: <FaTwitter />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/criticalcyber/",
      username: "Anubhav Gupta",
      icon: <PiInstagramLogoFill />,
    },
    {
      title: "Calendly",
      url: "https://calendly.com/criticalcyber/virtual-interaction/",
      username: "Anubhav Gupta",
      icon: <FaPhone />,
    },
  ];

  const footer_navigation = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Work",
      url: "/work",
    },
    {
      title: "Credentials",
      url: "/credentials",
    },
    {
      title: "Hire Me",
      url: "/hire-me",
    },
    {
      title: "Learn",
      url: "/learn",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-auto grid grid-cols-2 gap-3"
      >
        {social_links.length &&
          social_links.map(
            (link, index) =>
              link.title !== "Calendly" && (
                <motion.div
                  variants={childVariantFadeIn}
                  className="col-span-1"
                  key={index}
                >
                  <SectionHeadBtn
                    mode="light"
                    label={link.title}
                    sub_label={`@${link.username}`}
                    icon_1={link.icon}
                    icon_2={<MdArrowOutward />}
                    onClickHandler={() => window.open(link.url, "_blank")}
                  />
                </motion.div>
              )
          )}
        <motion.div
          variants={parentVariantFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-2"
        >
          <SectionHeadBtn
            mode="dark"
            label="Book a call"
            icon_1={<FaPhone />}
            icon_2={<MdArrowOutward />}
            onClickHandler={() => window.open("tel:9079841105", "_self")}
          />
        </motion.div>
      </motion.div>
      <motion.section
        id="footer-section"
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full h-auto flex flex-col justify-center items-center p-5 lg:py-5 lg:px-3 bg-base-content rounded-lg border-4 overflow-hidden border-base-content text-base-200"
      >
        <div className="w-fit flex flex-col items-center justify-center gap-3 mb-7 mx-auto">
          <motion.div variants={childVariantFadeIn} className="avatar shrink">
            <div className="w-16 rounded-full">
              <img src={profile_pic} alt="profile pic" />
            </div>
          </motion.div>
          <div className="grow text-center">
            <motion.h1
              variants={childVariantFadeIn}
              className="text-[18px] font-normal text-base-200 mb-0"
            >
              Anubhav Gupta
            </motion.h1>
            <motion.h2
              variants={childVariantFadeIn}
              className="text-[14px] font-normal text-base-200/60"
            >
              Web Engineer
            </motion.h2>
          </div>
        </div>
        <motion.nav
          variants={parentVariantReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-fit flex flex-wrap justify-center items-center gap-2 lg:gap-3"
        >
          {footer_navigation.length &&
            footer_navigation.map((menu_item, index) => (
              <motion.button
                key={index}
                variants={childVariantReveal}
                className={`btn text-[12px] w-fit btn-ghost btn-sm group relative overflow-hidden border-transparent bg-transparent shadow-none btn-default text-base-200`}
                onClick={() => navigate(menu_item.url)}
              >
                <div className="whitespace-nowrap top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">
                  {menu_item.title}
                </div>
                <div className="absolute whitespace-nowrap top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-500 z-10">
                  {menu_item.title}
                </div>
              </motion.button>
            ))}
        </motion.nav>
      </motion.section>
      <SectionHeader
        mode="light"
        id="copy-right-section"
        title={`Created with ❤️ by Anubhav Gupta`}
      />
    </>
  );
};

export default Footer;

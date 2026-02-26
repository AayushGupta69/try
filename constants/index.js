import { Github, Linkedin } from "lucide-react";

import { XIcon } from "@/components/x-icon";

export const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

export const words = [
  { text: "Ideas", imgPath: "/ideas.svg" },
  { text: "Concepts", imgPath: "/concepts.svg" },
  { text: "Designs", imgPath: "/designs.svg" },
  { text: "Code", imgPath: "/code.svg" },
  { text: "Ideas", imgPath: "/ideas.svg" },
  { text: "Concepts", imgPath: "/concepts.svg" },
  { text: "Designs", imgPath: "/designs.svg" },
  { text: "Code", imgPath: "/code.svg" },
];

export const counterItems = [
  { value: 1, suffix: "+", label: "Years of Internship Experience" },
  { value: 100, suffix: "+", label: "Bugs Resolved" },
  { value: 7, suffix: "+", label: "Techs Mastered" },
  { value: 95, suffix: "%+", label: "Stability Achieved" },
];

export const abilities = [
  {
    imgPath: "/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/AayushGupta69",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/aayushgupta69",
    label: "LinkedIn",
  },
  {
    icon: XIcon,
    href: "https://x.com/AayushGupta69",
    label: "X",
  },
];

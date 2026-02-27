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

export const testimonials = [
  {
    name: "Prof. Ganesh Ramakrishnan",
    position: "CSE Department, Indian Institute of Technology Bombay",
    review:
      "Aayush was an invaluable member of our team during his twelve-month internship at IIT Bombay, where he successfully developed and maintained the LEAP-PE Tool, a desktop application for post-editing machine-translated documents. He effectively incorporated new features, resolved bugs, and conducted user research. Aayush demonstrated exceptional achievements, showcasing strong team management, problem-solving skills, and the ability to quickly learn new technologies like QT. His technical expertise, commitment to quality, and effective communication skills make him an ideal candidate for future opportunities in software development.",
    imgPath: "/ganesh-r.jpg",
  },
  {
    name: "Sadam Hussain",
    position: "Software Engineer at Oracle",
    review:
      "Aayush consistently demonstrated exceptional dedication and efficiency, ensuring all tasks were completed promptly. Aayush is a true team player and brings great value to any project he is involved in.",
    imgPath: "/sadam-h.jpg",
  },
  {
    name: "Nishant Wankhede",
    position: "M.Tech student at IIT Delhi",
    review:
      "Throughout his internship, Aayush has consistently demonstrated exceptional timeliness and efficiency. His keen understanding of task urgency has resulted in swift and reliable deliveries. Aayush possesses a remarkable ability to quickly grasp new feature workflows, allowing him to contribute meaningfully. His cooperative nature and proactive approach have been invaluable assets to our team. Based on his performance, I wholeheartedly recommend Aayush for software development roles. I am confident that he will bring significant value to any position he undertakes, leveraging his technical competence, adaptability, and commitment to excellence.",
    imgPath: "/nishant-w.jpg",
  },
  {
    name: "Sagar Vats",
    position: "CTO Multyfi",
    review:
      "I highly recommend Aayush for his exceptional technical expertise and innovative approach to software development. He has consistently demonstrated the ability to design and implement scalable, efficient, and user-friendly solutions, resulting in significant improvements in performance and productivity. Aayush's strong problem-solving skills, attention to detail, and commitment to excellence make him a valuable asset to any organization. He is a collaborative team player with excellent communication skills, able to effectively translate complex technical concepts into actionable insights. I strongly endorse Aayush for any opportunity, and I am confident he will continue to drive innovation and deliver outstanding results.",
    imgPath: "/sagar-v.jpg",
  },
];

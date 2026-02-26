"use client";

import { useRef } from "react";
import Image from "next/image";

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const realScoutRef = useRef(null);
  const kitabwaleRef = useRef(null);
  const prepWiseRef = useRef(null);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={prepWiseRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <Image
                src="/project1.png"
                alt="Prepwise: AI-Driven Job Interview Preparation"
                width={1920}
                height={1080}
              />
            </div>
            <div className="text-content">
              <h2>Prepwise: AI-Driven Job Interview Preparation</h2>
              <p className="text-white-50 md:text-xl">
                Prepwise harnesses Vapi AI Voice agents and Google Gemini to
                create interactive, voice-driven simulations of real interview
                scenarios, allowing you to fine-tune your responses, enhance
                your communication skills, and receive instant, data-backed
                feedback—all through a seamless, personalized platform.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={realScoutRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <Image src="/project2.png" alt="RealScout App Interface" fill />
              </div>
              <h2>RealScout - A FullStack Real Estate application</h2>
            </div>

            <div className="project" ref={kitabwaleRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <Image
                  src="/project3.png"
                  alt="KitabWale - A platform for buying and selling used books online."
                  fill
                />
              </div>
              <h2>
                KitabWale - A platform for buying and selling used books online
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

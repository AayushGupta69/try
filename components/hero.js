"use client";

import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import { words } from "@/constants";
import Button from "./button";
import ProfilePhoto from "./profile-photo";
import AnimatedCounter from "./animated-counter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <Image src="/bg.png" alt="bg" width={418} height={327} />
      </div>

      <div className="hero-layout">
        <header className="flex w-screen flex-col items-center justify-center gap-20 px-5 sm:gap-12 md:w-full md:flex-row md:justify-between md:gap-8 md:px-20 lg:gap-12">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 pb-2 md:gap-3"
                      >
                        <Image
                          src={word.imgPath}
                          alt="person"
                          width={24}
                          height={24}
                          className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 pointer-events-none relative z-10 md:text-xl">
              Hi, I&#39;m Aayush Gupta, a developer based in India with a
              passion for code.
            </p>

            <Button
              text="See My Work"
              className="h-12 w-60 md:h-16 md:w-80"
              id="counter"
            />
          </div>

          <ProfilePhoto />
        </header>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;

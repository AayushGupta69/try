"use client";

import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const ProfilePhoto = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".profile-photo-container",
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power2.inOut" },
    );

    gsap.to(".profile-photo-image", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className="profile-photo-container flex items-center justify-center md:min-w-fit">
      <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-80 md:w-80 lg:h-96 lg:w-96">
        {/* Background gradient circle */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-100 to-blue-50 opacity-20 blur-2xl" />

        {/* Profile photo container with border */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="profile-photo-image border-white-50 relative h-36 w-36 overflow-hidden rounded-full border-2 shadow-2xl sm:h-44 sm:w-44 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/profile.jpeg"
              alt="Aayush Gupta"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;

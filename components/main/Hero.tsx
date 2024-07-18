import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-0 left-0 h-full w-full object-cover z-10"
        style={{ transform: "translateY(-340px)" }}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="relative z-20">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;

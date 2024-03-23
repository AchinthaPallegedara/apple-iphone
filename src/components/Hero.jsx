import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  //To change video src based on screen size
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  );
  //To change video src based on screen size after change the load
  const handleVideoSrc = () => {
    if (window.innerWidth > 760) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  };
  //To run the function when the screen size changes
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);
    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      delay: 1.8,
      opacity: 1,
    });
    gsap.to("#cta", {
      delay: 2,
      opacity: 1,
      y: -50,
    });
  });

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/mo or $999</p>
      </div>
    </section>
  );
};

export default Hero;

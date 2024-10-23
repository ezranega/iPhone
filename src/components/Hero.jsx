import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo)
    } else {
      setvideoSrc(heroVideo)
    }
  }

  useEffect (() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5
    })

    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      delay: 2
    })
  })

  return (
    <main className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 pro</p>

        <div className="w-9/12 md:w-10/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="highlights" className="btn">Buy</a>
        <p className="text-gray font-normal text-lg sm:text-xl">From $999 or $41.62/mo. for 24 mo.<sup>1</sup></p>
        <p className="text-gray text-sm sm:text-lg">Apple Intelligence coming this fall<sup>2</sup></p>
      </div>
    </main>
  );
};

export default Hero;

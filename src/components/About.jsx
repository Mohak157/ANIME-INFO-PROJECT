import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div>
    <div id="about" className="w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
           <h2 className="font-general text-sm uppercase">Welcome to animeinfo</h2>
           <div className="mt-5 text-center text-4xl uppercase leading-[0.8]">
           <b> A </b><b>P</b>LACE <b>W</b>HERE <b>A</b>LL <b>O</b>F <b>T</b>HE <br /> <br /><b>L</b>ATEST <b>A</b>NIME <b>N</b>EWS <b>A</b>ND <b>E</b>VENTS <br /> <br /> <b>A</b>RE <b>G</b>ATHERED

           </div>
         
        </div>
       
    </div>
     <div className="h-dvh relative  w-screen "id="clip">
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl ">
            <img src="img/new.png" alt="Background" className="absolute left-0 top-0 size-full object-cover " />
     </div>
     </div>
    </div>
   
  )
}

export default About
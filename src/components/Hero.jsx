import React, { useEffect } from 'react'; 
import Button from './Button';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    
    gsap.set('#video-frame', {
      clipPath: 'polygon(20% 0%, 70% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });


    const animation = gsap.fromTo(
      '#video-frame',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        borderRadius: '0 0 0 0',
      },
      {
        clipPath: 'polygon(20% 0%, 70% 0%, 90% 90%, 0% 100%)',
        borderRadius: '0 0 40% 10%',
        ease: 'power1.inOut',
          scrollTrigger: {
          trigger: '#video-frame',
          start: 'center center',
          end: 'bottom center',
          scrub: true,
        }
      }
    );

    return () => {
      
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative z-10 overflow-hidden">
        <div id="video-frame">
          <video
            className="mx-auto w-full object-cover h-[100vh]"
            src="videos/hero.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="absolute left-5 top-10 z-40 size-full">
          <div className="mt-24">
          
            <h1 className="text-blue-100 uppercase font-zentry  text-[8rem]">
                
            <Typewriter options={{
                strings:['I AM','One Piece','Naruto','Solo Leveling',
  'Fullmetal Alchemist: Brotherhood',
  'Attack on Titan',
  'Naruto',
  'One Piece',
  'Death Note',
  'Demon Slayer: Kimetsu no Yaiba',
  'Jujutsu Kaisen',
  'Hunter x Hunter',
  'My Hero Academia',
  'Cowboy Bebop',
  'Steins;Gate',
  'Made in Abyss',
  'Code Geass: Lelouch of the Rebellion',
  'Tokyo Ghoul',
  'Bleach',
  'Vinland Saga',
  'Mob Psycho 100',
  'Spy × Family',
  'Frieren: Beyond Journey’s End',
  'Dan Da Dan',
  'Delicious in Dungeon',
  'The Apothecary Diaries',
  'Kaiju No. 8',
  'Re:ZERO − Starting Life in Another World',
  'Mashle: Magic and Muscles',
  'Ninja Kamui',
  'Blue Box',
  'Look Back',
  'Oshi no Ko',
  'Cyberpunk: Edgerunners',
  'Yuri on Ice',
  'Suzume',
  'Bocchi the Rock!',
  'Chainsaw Man',
  'Spy × Family Season 2',
  'My Hero Academia Season 2',
  'Demon Slayer: Hashira Training Arc',
  'BLEACH: Thousand‑Year Blood War',
  'Steins;Gate 0',
  'Clannad: After Story',
  'Your Lie in April',
  'Neon Genesis Evangelion',
  'Death Parade',
  'Parasyte: The Maxim',
  'The Promised Neverland',
  'Haikyu!!',
  'Kaguya‑sama: Love is War',
  'Gintama',
  'Monster',
  'Mushoku Tensei: Jobless Reincarnation',
  'Land of the Lustrous',
  'Puella Magi Madoka Magica',
  'Black Clover',
  'Fruits Basket (2019)',
  'Erased',
  'Prince of Tennis',
  'Dr. Stone',
  'The Rising of the Shield Hero',
  'Hellsing Ultimate',
  'Great Pretender',
  'Golden Kamuy',
  'A Place Further than the Universe',
  'Violet Evergarden',
  'Made in Abyss: The Golden City of the Scorching Sun',
  'Drifters',
  'Hell’s Paradise: Jigokuraku',
  'Welcome to the N.H.K.',
  'Barakamon',
  'Anohana: The Flower We Saw That Day',
  'Psycho‑Pass',
  'Slam Dunk',
  'Beastars',
  'The Quintessential Quintuplets',
  'K-On!',
  'Toradora!',
  'Cowboy Bebop: The Movie',
  'Blood Blockade Battlefront',
  'Dorohedoro',
  'Mob Psycho 100 II',
  'Shouwa Genroku Rakugo Shinjuu',
  'Spice and Wolf',
  'Ghost in the Shell: Stand Alone Complex',
  'Terror in Resonance',
  'Ping Pong the Animation',
  'FLCL',
  'Nichijou',
  'Monogatari Series',
  'Sarazanmai',
  'Kizumonogatari',
  'Welcome to Demon School! Iruma-kun',
  'Toriko',
  'Monster Musume',
  'Samurai Champloo',
  'Haruhi Suzumiya Series',
  'A Silent Voice',
  'Your Name'
],
                autoStart:true,
                loop:true,
                cursor:'|',
                changeDeleteSpeed:0,
                changeDelay:0,


            }}/>
            </h1>
            <p className="  mb-5 text-3xl font-robert-regular text-blue-100">
              Learn About The Newest Releases And Latest Info
            </p>
             <div className="absolute bottom-0 z-40 right-10">
    <h1 className="text-black uppercase  font-zentry  text-[5rem]">
     EXPLORE
    </h1>
    </div>
    <a href="#animelist">
            <Button
              id="hero-button"
              
              title="Click Me"
              containerClass="bg-orange-400 flex-center gap-1"
            />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;

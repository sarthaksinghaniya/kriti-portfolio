import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/herovideo.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  // Default to true to allow browser safe autoplay constraints
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Switches audio states cleanly without freezing or pausing the video frame timeline
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      // Safety check: ensure the video remains playing if it dropped frame execution state
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - configured to safely launch instantly with autoplay */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onEnded={() => {
          setIsMuted(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.log("Play failed on loop:", e));
          }
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay factor for optimized readability without completely muddying up the blue tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container - UPDATED: Changed items-center to items-start and added responsive top padding (pt-28 / md:pt-[12%]) to lift content below the navbar */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-28 md:pt-[12%]">
        
        {/* Left Side: Text and Buttons - Shifted higher up */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I’m a <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              AI/ML Engineer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            I build intelligent, scalable machine learning models and data pipelines using Python, PyTorch, and cloud technologies.
          </p>

          {/* Buttons Area */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col gap-4 w-full items-start"
          >
            <div className="flex flex-row items-center gap-4">
              {/* Primary Button */}
              <a 
                href="#projects" 
                className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
              >
                View My Work
              </a>
              
              {/* Secondary Button */}
              <a 
                href="#contact" 
                className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
              >
                Contact Me
              </a>
            </div>

            {/* LeetCode Button Row */}
            <div className="flex flex-row items-center gap-4 mt-2">
              <a 
                href="https://leetcode.com/u/kritixleetcode/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-[#FFA116] text-black font-bold hover:bg-[#FFB13B] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-flex items-center justify-center gap-2 border border-transparent hover:border-white/50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.513 5.277 5.277 0 0 0 1.062 2.362 5.33 5.33 0 0 0 2.107 1.643 5.281 5.281 0 0 0 2.682.357 5.337 5.337 0 0 0 2.045-1.026 5.27 5.27 0 0 0 1.54-2.22l.142-.38h-2.597l-.116.192a2.68 2.68 0 0 1-1.46 1.157 2.68 2.68 0 0 1-1.921-.132 2.67 2.67 0 0 1-1.325-1.124 2.656 2.656 0 0 1-.365-1.895 2.67 2.67 0 0 1 .803-1.638l3.651-3.905 4.887-5.23a.687.687 0 0 1 .494-.216.687.687 0 0 1 .49.22l3.41 3.65a.692.692 0 0 1 .184.664.69.69 0 0 1-.413.484l-2.022.863a.688.688 0 0 0-.363.364.688.688 0 0 0-.007.502l1.643 3.967a.69.69 0 0 0 .393.368.687.687 0 0 0 .5-.052l2.36-1.144a2.66 2.66 0 0 1 1.706-.178 2.66 2.66 0 0 1 1.341 1.02 2.668 2.668 0 0 1 .455 1.722 2.668 2.668 0 0 1-.87 1.54l-5.06 4.75a.688.688 0 0 1-.944-.002.688.688 0 0 1-.19-.508v-4.14a.688.688 0 0 0-.203-.49.688.688 0 0 0-.49-.204H9.41a.688.688 0 0 0-.688.688v.688a.688.688 0 0 0 .688.688h3.336v2.091a2.062 2.062 0 0 1-2.063 2.063h-1.61a2.062 2.062 0 0 1-2.063-2.063V20.15a2.062 2.062 0 0 1 2.063-2.063h4.606l4.636-4.354a4.043 4.043 0 0 0 1.258-2.316 4.04 4.04 0 0 0-.74-2.65 4.037 4.037 0 0 0-2.098-1.503 4.03 4.03 0 0 0-2.636.275l-.946.46-1.157-2.793 1.583-.675a2.064 2.064 0 0 0 1.084-1.294 2.065 2.065 0 0 0-.547-1.874l-3.41-3.651A2.067 2.067 0 0 0 13.483 0z"/>
                </svg>
                LeetCode Profile
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Mute/Unmute Dynamic Audio Controller - Aligned to items-start for clean tracking */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-12 md:mt-2 flex flex-col items-center justify-center gap-2 cursor-pointer group self-start md:self-auto"
          onClick={toggleMute}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl">
            {isMuted ? (
              // Speaker Muted Icon
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              // Speaker Audio Active Waves Icon
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity mt-1">
            {isMuted ? "Unmute Reel" : "Mute Sound"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white opacity-70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
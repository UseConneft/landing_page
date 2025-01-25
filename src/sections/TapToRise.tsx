"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TapToRise() {
  const [showSection1, setShowSection1] = useState(true);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallDevice) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowSection1(false);
          }
        },
        { threshold: 0.5 }
      );

      const currentSectionRef = sectionRef.current;
      if (currentSectionRef) {
        observer.observe(currentSectionRef);
      }

      return () => {
        if (currentSectionRef) {
          observer.unobserve(currentSectionRef);
        }
      };
    }
  }, [isSmallDevice]);

  const sectionVariants = {
    initial: { opacity: 1, position: "absolute" as const, width: "100%" },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const section2Variants = {
    initial: { opacity: 0, position: "absolute" as const, width: "100%" },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div
      id="tap-to-rise"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-t from-[#1F3434] to-[#17111A] overflow-hidden"
    >
      {isSmallDevice ? (
        // Directly render Section 2 for small devices
        <section className="h-screen py-8 grid grid-cols-1 md:grid-cols-2 md:p-8">
          <div className="p-8 mb-[-16rem] text-center flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#BBFFFF] font-bold">
              Tap To Rise (TTR)
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white mt-4 leading-relaxed font-light tracking-wide">
              Gone are the days of fumbling for business cards or typing phone
              numbers. Just tap in, and share your whole professional
              story. from contact info to portfolio, all shared in a
              blink of an eye.(with just a single tap) It&apos;s that simple.
            </p>
          </div>
          <div className="m-[-10rem] flex justify-center items-center">
            <Image src="/TTR111.png" alt="Image" width={300} height={300} />
          </div>
        </section>
      ) : (
        // Animate between Section 1 and Section 2 for larger devices
        <AnimatePresence mode="wait">
          {showSection1 ? (
            <motion.section
              key="section1"
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
              variants={sectionVariants}
              className="h-screen flex justify-center items-center"
            >
              <div className="p-8 flex flex-col justify-start items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#BBFFFF] font-bold">
                  Tap To Rise (TTR)
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-white mt-4 leading-relaxed font-light tracking-wide">
                  Gone are the days of fumbling for business cards or typing
                  phone numbers. Just tap in, and share your whole professional
                  story, from contact info to portfolio, all shared in a blink
                  of an eye (with just a single tap). It&apos;s that simple.
                </p>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="section2"
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
              variants={section2Variants}
              className="h-screen grid grid-cols-1 md:grid-cols-2 md:p-8"
            >
              <div className="p-4 flex justify-center items-center">
                <Image src="/TTR111.png" alt="Image" width={500} height={500} />
              </div>
              <div className="p-8 relative flex flex-col justify-center items-start ml-[-4rem]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#BBFFFF] font-bold">
                  Tap To Rise (TTR)
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-white mt-4 leading-relaxed font-light tracking-wide">
                  Gone are the days of fumbling for business cards or typing
                  phone numbers. Just tap in, and share your whole professional
                  story, from contact info to portfolio, all shared in a blink
                  of an eye (with just a single tap). It&apos;s that simple.
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

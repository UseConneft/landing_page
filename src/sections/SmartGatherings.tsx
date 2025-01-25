"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SmartGatherings() {
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
      id="smart-gatherings"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-t from-[#6767AF] to-[#17111A] overflow-hidden"
    >
      {isSmallDevice ? (
        // Directly render Section 2 for small devices
        <section className="h-screen grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 mb-[-16rem] text-center flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#BBFFFF] font-bold">
              Smart Gatherings
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white mt-4 leading-relaxed font-light tracking-wide">
              Find your crowd, tap to connect. From business meetups to social
              hangouts, discover events around you and link with new
              connections instantly. One app, endless ways to connect
              with people who matter.
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src="/SmartGatherings111.png"
              alt="Image"
              width={300}
              height={300}
            />
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
                  Smart Gatherings
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-white mt-4 leading-relaxed font-light tracking-wide">
                  Find your crowd, tap to connect. From business meetups to
                  social hangouts, discover <br /> events around you and link
                  with new connections instantly. One app, endless ways to{" "}
                  <br /> connect with people who matter.
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
              className="h-screen grid grid-cols-1 md:grid-cols-2"
            >
              <div className="p-8 flex flex-col justify-center items-start ml-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#BBFFFF] font-bold">
                  Smart Gatherings
                </h2>
                <p className="text-xs sm:text-sm md:text-lg text-white mt-4 leading-relaxed font-light tracking-wide">
                  Find your crowd, tap to connect. From business meetups to
                  social hangouts, discover events around you and link with new
                  connections instantly. One app, endless ways to connect with
                  people who matter.
                </p>
              </div>
              <div className="p-4 flex justify-center items-center">
                <Image
                  src="/SmartGatherings111.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

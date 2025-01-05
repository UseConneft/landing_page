"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import WaitlistModal from "@/components/WaitlistModal";

export default function Hero() {
  const [showSection1, setShowSection1] = useState(true);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
      const timer = setTimeout(() => {
        setShowSection1(false);
      }, 3000);

      return () => clearTimeout(timer);
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
    <>
      <div className="relative min-h-screen w-full bg-[#17111A] overflow-hidden">
        {isSmallDevice ? (
          // Directly render Section 2 for small devices
          <section className="h-screen mt-20 grid grid-cols-1 md:grid-cols-2 md:p-8">
            <div className="p-8 text-center flex justify-center items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#7A8AC1] font-bold">
                  Struggling to stand out?
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white mt-4 leading-relaxed font-light tracking-wide">
                  We&apos;re your one-tap solution to meaningful <br />{" "}
                  connections.
                </p>

                <div className="w-full flex justify-center items-center gap-4 mt-8">
                  <Button
                    text="Join the Waitlist"
                    className="w-[50%] p-4 bg-[#86AFB8] text-sm text-black border border-[#17111A]"
                    onClick={handleOpenModal}
                  />
                  <Button
                    text="Learn More"
                    className="w-[50%] p-4 bg-[#17111A] text-sm text-white border-l-2 border-t-2 border-[#86AFB8]"
                    style={{ boxShadow: "4px 6px 6px #514F86" }}
                  />
                </div>
              </div>
            </div>
            <div className="m-[-6rem] flex justify-center items-center">
              <Image
                src="/hero.svg"
                alt="Hero Image"
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#7A8AC1] font-bold">
                    Struggling to <br /> stand out?
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-white mt-4 leading-relaxed font-light tracking-wide">
                    We&apos;re your one-tap solution to meaningful connections.
                  </p>

                  <div className="w-full flex justify-center items-center gap-4 mt-8">
                    <Button
                      text="Join the Waitlist"
                      className="w-[50%] p-4 bg-[#86AFB8] text-black border border-[#17111A]"
                      onClick={handleOpenModal}
                    />
                    <Button
                      text="Learn More"
                      className="w-[50%] p-4 bg-[#17111A] text-white border-l-2 border-t-2 border-[#86AFB8]"
                      style={{ boxShadow: "4px 6px 6px #514F86" }}
                    />
                  </div>
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
                className="h-screen mt-8 grid grid-cols-1 md:grid-cols-2 md:p-8"
              >
                <div className="p-8 md:ml-16 flex justify-start items-center">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#7A8AC1] font-bold">
                      Struggling to <br /> stand out?
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white mt-4 leading-relaxed font-light tracking-wide">
                      We&apos;re your one-tap solution to connections.
                    </p>

                    <div className="w-full flex justify-center items-center gap-4 mt-12">
                      <Button
                        text="Join the Waitlist"
                        className="w-[50%] p-4 bg-[#86AFB8] text-black border border-[#17111A]"
                        onClick={handleOpenModal}
                      />
                      <Button
                        text="Learn More"
                        className="w-[50%] p-4 bg-[#17111A] text-white border-l-2 border-t-2 border-[#86AFB8]"
                        style={{ boxShadow: "4px 6px 6px #514F86" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4  flex justify-center items-center">
                  <Image
                    src="/hero.svg"
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

      <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

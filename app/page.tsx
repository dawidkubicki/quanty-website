"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-white font-inter overflow-hidden">
       
        <main className="flex flex-col justify-center h-[90%] static md:fixed w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
          {/* Logo */}
          <h2 className="md:ml-[-10px] font-semibold text-[#1a2b3b] md:text-[40px]">
          Quanty.ai
          </h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] font-inter text-[#1E2B3A] leading-[1.0] tracking-[-2px] z-[100]"
          >
            Enhance your <br />
            market <span className="text-[#23B684]">insights</span>
            <span className="font-inter text-[#23B684]">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.95,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-2xl md:space-x-8"
          >
            <div className="w-full">
              <h2 className="flex items-center font-semibold text-[1em] text-[#1a2b3b]">
                What is Quanty.ai
              </h2>
              <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal">
              Platform delivers AI-powered cryptocurrency insights, harnessing the power of knowledge graphs for deep market understanding. Dive into a world of intelligent analytics and data-rich visualizations, all driven by advanced algorithms to guide your investment strategies.
              </p>
            </div>
            
          </motion.div>

          <div className="flex gap-[15px] mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScBxKHxvVg7bhiI2wL9OLlqSNHkEhFAvaRSJ1A2cmQgBbgTzw/viewform?usp=sf_link"
                target="_blank"
                className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                style={{
                  boxShadow:
                    "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="mr-1">❤️</span>
                Join Waitlist
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
            >
              
            </motion.div>
          </div>
        </main>

        <div
          className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20"
          style={{
            clipPath:
              "polygon(200px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
          }}
        ></div>

        <motion.canvas
          initial={{
            filter: "blur(20px)",
          }}
          animate={{
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.075, 0.82, 0.965, 1],
          }}
          style={{
            clipPath:
              "polygon(200px 0,100% 0,calc(100% + 225px) 100%, 100px 100%)",
          }}
          id="gradient-canvas"
          data-transition-in
          className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
        ></motion.canvas>
        <div className="h-[60px] bg-[#1E2B3A] pt-[1.15rem] md:pt-0 fixed bottom-0 z-[1000] md:z-20 w-full flex flex-row items-start">
          <p className="text-white/80 text-sm ml-4 md:ml-20 md:text-sm font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
          Quanty.ai © {year}
          </p>
          <p className="text-white/80 text-sm ml-10 underline md:text-xs font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
            <Link href={"/assets/Privacy_Policy.pdf"}>
              Privacy Policy
            </Link>
          </p>

        </div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import Image from "next/image";
import { motion, Spring } from "motion/react";
import { AuroraBackground } from "./ui/aurora-background";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

import NavSpacer from "./ui/NavSpacer";

export default function HeroSectionOne({
  stickyScrollContentPass,
  heroSectionContent,
}: {
  heroSectionContent: {
    heading: string;
    paragraph: string;
  };
  //just passing
  stickyScrollContentPass: any[];
}) {
  return (
    <div className="relative mx-auto flex max-w-12/12 flex-col items-center justify-center">
      <div className="noise-overlay z-2 absolute w-full h-full"></div>

      <AuroraBackground className="absolute z-1 left-0 right-0">
        <p></p>
      </AuroraBackground>
      <NavSpacer />

      <div className="relative z-3">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-7x2 text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            {`${heroSectionContent.heading}`.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            {heroSectionContent.paragraph}
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className=" w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Explore Now
            </button>
            <button className=" w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Contact Support
            </button>
          </motion.div>
          <div className="flex justify-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 1.2,
              }}
              className="relative w-70 sm:w-full z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                <div className=" w-full py-4">
                  <StickyScroll
                    stickyScrollContent={stickyScrollContentPass}
                  ></StickyScroll>
                </div>

                {/* <Image
                src="/images/1231231.png"
                alt="Landing page preview"
                className="aspect-[16/9] h-auto w-full object-cover"
                height={1000}
                width={1000}
              /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Hero = () => {
  return (
    <>
      <div className=" bg-gray-100 h-[90vh] lg:h-[110vh] flex justify-center items-center">
        {/* Content */}
        <motion.div
          className="flex flex-col items-center mx-4 gap-y-6 -mt-[3em] md:-mt-[10em] z-[99]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-semibold"
            variants={fadeInUpVariants}
          >
            Innovative Solutions,
            <br />
            <span className="text-primary-color text-2xl md:text-3xl lg:text-4xl">Tailored Platforms. White-Labeled Power Solutions</span>
          </motion.h1>

          <motion.p
            className="text-black text-center md:text-lg lg:w-[50%]"
            variants={fadeInUpVariants}
          >
            Mascons delivers forward-thinking, white-labeled digital solutions. 
            By combining cutting-edge technology with deep financial insights, we empower businesses to optimize
            transactions, enhance security, and drive efficiency in
            international trade.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-x-4 gap-y-4"
            variants={fadeInUpVariants}
          >
            <Link href="/contact">
              <button className="bg-primary-color shadow-md text-[#f1f2ef] font-medium tracking-wider px-8 py-3 rounded-full">
                Apply Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-primary-color shadow-md text-[#f1f2ef] font-medium tracking-wider px-8 py-3 rounded-full">
                Register as Referral Partner
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex justify-center items-center -mt-[4em] lg:-mt-[8em] z-[99]">
        <video
          autoPlay
          muted
          loop
          className="h-auto w-[80%] lg:w-[70%] rounded-2xl shadow-md z-[99]"
        >
          <source src="/static/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Hero;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[60rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <Image
            src="/portrait.png"
            alt="portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hi, I'm Charlie!`}</span>{" "}
        {`I'm an aspiring `}
        <span className="font-bold">software engineer</span> with experience
        building <span className="font-bold">fullstack applications.</span> I
        enjoy creating <span className="italic">websites and mobile apps</span>.
        My focus is <span className="underline">React(Next.js)</span> and{" "}
        <span className="underline">React Native</span>.
      </motion.p>
    </section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About", 0.85);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[48rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there! I graduated from{" "}
        <span className="font-bold">New York Institute of Technology</span> with a{" "}
        <span className="font-bold">BS in Computer Science</span>, achieving a{" "}
        <span className="font-bold">3.98 GPA</span>. I'm currently pursuing my{" "}
        <span className="font-bold">Master's in Computer Science</span> at{" "}
        <span className="font-bold">Georgia Tech</span> through their online OMSCS program.
      </p>

      <p className="mb-3">
        Currently based in <span className="font-bold">New York City</span>, I am seeking a{" "}
        <span className="font-bold">full-time position</span> as a software
        engineer and am open to both remote and on-site opportunities nationwide.
      </p>

      <p className="mb-3">
        My favorite thing about programming? It has to be the{" "}
        <span className="italic">magic</span> of turning a cool idea into something 
        real and functional. That's why I dove into{" "}
        <span className="font-bold">full-stack development</span>. I love every bit 
        of the process, whether I'm tinkering with{" "}
        <span className="font-bold">React</span>, wrangling with{" "}
        <span className="font-bold">Next.js</span>, styling with
        <span className="font-bold"> TailwindCSS</span>, or managing data in{" "}
        <span className="font-bold">MongoDB</span>. I'm also experienced with{" "}
        <span className="italic">
          React Native, Supabase, TypeScript, Python{" "}
        </span>
        and <span className="italic">AWS Lambda/Gateway</span> -
        always keen to add more tools to my belt.
      </p>

      <p>
        When I'm not coding, I'm probably hitting the keys of a piano, trying to
        make some music of my own, or getting lost in a good book from any kind
        of genre. I'm also a big sports fan and a video game enthusiast. These
        hobbies keep me <span className="font-bold">balanced</span> and spark my{" "}
        <span className="font-bold">creativity</span> in coding. It's all about{" "}
        <span className="italic">enjoying the process</span>, in work and play!
      </p>
    </motion.section>
  );
}

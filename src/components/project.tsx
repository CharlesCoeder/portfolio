"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="mb-3 sm:mb-8 last:mb-0"
      data-project-title={title}
      style={{
        scale: scaleProgress,
        opacity: opacityProgess,
      }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full">
        <section
          className="group bg-slate-100 max-w-[42rem] border
          border-black/5 overflow-hidden relative rounded-lg
          hover:bg-slate-200 transition cursor-pointer"
        >
          <div className="flex flex-col h-full gap-4 p-4 sm:p-8">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
              <ul className="flex flex-wrap mt-4 gap-2">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full">
              <Image
                src={imageUrl}
                alt="Project"
                quality={95}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </a>
    </motion.div>
  );
}

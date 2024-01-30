"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import TimelineElement from "./TimelineElement";

export default function Experience() {
  const ref = useSectionInView("Experience", 0.85);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((item, index) => {
          return <TimelineElement key={index} item={item} />;
        })}
      </VerticalTimeline>
    </section>
  );
}

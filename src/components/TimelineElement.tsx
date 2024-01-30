import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { experiencesData } from "@/lib/data";

type ExperienceItem = (typeof experiencesData)[number];
type TimelineElementProps = {
  item: ExperienceItem;
};

export default function TimelineElement({ item }: TimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0,0,0, 0.05)",
          textAlign: "left",
          padding: "2rem 2.5rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h4 className="font-semibold capitalize">{item.title}</h4>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-slate-700">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}

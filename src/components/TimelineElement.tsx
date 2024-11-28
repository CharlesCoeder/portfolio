import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { scrollToProject } from "@/lib/utils";
import { ExperienceItem } from "@/lib/types";

type TimelineElementProps = {
  item: ExperienceItem;
};

export default function TimelineElement({ item }: TimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleClick = () => {
    if (item.projectLink) {
      scrollToProject(item.projectLink);
    }
  };

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
        <div
          onClick={handleClick}
          className={item.projectLink ? "cursor-pointer" : ""}
        >
          <h4 className="font-semibold capitalize">{item.title}</h4>
          {item.location && (
            <p className="!mt-0 font-normal">{item.location}</p>
          )}
          <p className="!mt-1 !font-normal text-slate-700">
            {item.description}
          </p>
          {item.projectLink && (
            <div className="text-sm italic text-gray-600 mt-2">
              Click to view project details
            </div>
          )}
        </div>
      </VerticalTimelineElement>
    </div>
  );
}

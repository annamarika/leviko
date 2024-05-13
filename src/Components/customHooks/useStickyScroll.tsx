import { useEffect, RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Options {
  start: string;
  endTrigger?: (element: HTMLElement) => string; // Optional end trigger function
  pinSpacing: boolean;
  isLastSection?: boolean; // Indicator if it is the last section
  onLeave?: () => void;
  onEnterBack?: () => void;
}

export function useStickyScroll(
  refs: RefObject<HTMLElement>[],
  options: Options
) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    refs.forEach((ref, index) => {
      if (ref.current) {
        const element = ref.current; // Type assertion here
        const isLast = index === refs.length - 1; // Check if the current section is the last one

        ScrollTrigger.create({
          trigger: element,
          start: "top top",
          end: () => {
            if (isLast) {
              return "bottom bottom"; // End when the bottom of the section hits the bottom of the viewport
            } else if (options.endTrigger) {
              return options.endTrigger(element);
            } else {
              return `+=${element.scrollHeight}px`; // Default to extending by the scrollHeight of the section
            }
          },
          pin: true,
          pinSpacing: options.pinSpacing,
          onLeave: options.onLeave,
          onEnterBack: options.onEnterBack,
        });
      }
    });

    // Refresh ScrollTrigger to ensure everything is calculated with final sizes after page is fully loaded
    ScrollTrigger.refresh();

    return () => {
      // Clean up the ScrollTriggers when the component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [refs, options]); // Include dependencies as necessary
}

import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface Options {
  start: string;
  endTrigger?: (element: HTMLElement) => string;
  pinSpacing: boolean;
  isLastSection?: boolean;
  onLeave?: () => void;
  onEnterBack?: () => void;
}

export function useStickyScroll(
  refs: RefObject<HTMLElement>[],
  options: Options
) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers: ScrollTrigger[] = []; // Explicitly typing the array as ScrollTrigger[]

    refs.forEach((ref, index) => {
      if (ref.current) {
        const element = ref.current;
        const isLast = index === refs.length - 1;

        const trigger = ScrollTrigger.create({
          trigger: element,
          start: options.start,
          end: () => {
            if (isLast) {
              return "bottom bottom";
            } else if (options.endTrigger) {
              return options.endTrigger(element);
            } else {
              return `+=${element.scrollHeight}px`;
            }
          },
          pin: true,
          pinSpacing: options.pinSpacing,
          onLeave: options.onLeave,
          onEnterBack: options.onEnterBack,
        });

        triggers.push(trigger); // Store the trigger for later cleanup
      }
    });

    // Refresh ScrollTrigger to ensure everything is calculated with final sizes after page is fully loaded
    ScrollTrigger.refresh();

    return () => {
      // Cleanup function to kill all ScrollTrigger instances when the component unmounts or dependencies change
      triggers.forEach((trigger) => trigger.kill()); // Kill each individual trigger
    };
  }, [refs, options]); // Include dependencies as necessary
}

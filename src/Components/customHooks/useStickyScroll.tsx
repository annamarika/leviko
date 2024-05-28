import { useEffect, RefObject } from "react";

interface Options {
  onEnter?: (entry: IntersectionObserverEntry) => void;
  onLeave?: (entry: IntersectionObserverEntry) => void;
}

export function useStickyScroll(
  refs: RefObject<HTMLElement>[],
  options: Options
) {
  useEffect(() => {
    const handleScroll = () => {
      const lastRef = refs[refs.length - 1].current;
      if (lastRef) {
        const rect = lastRef.getBoundingClientRect();
        if (rect.top <= 0) {
          // Last element has reached the top, remove sticky from all elements
          refs.forEach((ref) => {
            if (ref.current) {
              ref.current.classList.remove("sticky");
            }
          });
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && options.onEnter) {
            options.onEnter(entry);
          } else if (!entry.isIntersecting && options.onLeave) {
            options.onLeave(entry);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      refs.forEach((ref) => {
        if (ref.current) {
          ref.current.classList.remove("sticky");
        }
      });
    };
  }, [refs, options.onEnter, options.onLeave]);
}

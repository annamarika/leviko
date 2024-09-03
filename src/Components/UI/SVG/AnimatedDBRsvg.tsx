import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DBRSVG from "./DBRsvg.tsx";

const AnimatedDBRSVG = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate SVG paths
    const paths = document.querySelectorAll(".animated-path");

    if (paths && paths.length > 0) {
      paths.forEach((path, index) => {
        const pathElement = path as SVGPathElement;

        gsap.fromTo(
          pathElement,
          {
            strokeDasharray: pathElement.getTotalLength(),
            strokeDashoffset: pathElement.getTotalLength(),
            opacity: 0,
          },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".DBRDiagrammWrapper",
              start: "-300 top", // Adjust as needed
              end: "100 top",
              scrub: 0.5,
              markers: true, // Remove this in production
            },
          }
        );
      });
    }

    // Responsive animation for DiagrammBox components
    const mm = gsap.matchMedia();

    mm.add(
      {
        // Define your breakpoints
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 429px) and (max-width: 1023px)",
        isMobile: "(max-width: 430px)",
      },
      (context) => {
        if (!context.conditions) return;

        let xStart: number;

        // Set xStart based on screen size
        if (context.conditions.isDesktop) {
          xStart = 400; // Move more on larger screens
        } else if (context.conditions.isTablet) {
          xStart = -100; // Moderate move on tablet
        } else if (context.conditions.isMobile) {
          xStart = -300; // Smaller move on mobile
        }

        const boxes = gsap.utils.toArray<HTMLElement>(".DiagrammBox");

        boxes.forEach((box, index) => {
          gsap.fromTo(
            box,
            { x: xStart, opacity: 0 }, // Start with the calculated x value
            {
              x: 0, // End at the original position
              opacity: 1, // Keep full opacity throughout
              duration: 1.5,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".DBRDiagrammWrapper",
                start: "-200 top", // Adjust the start position as needed
                end: "100 top",
                scrub: 0.5,
              },
            }
          );
        });
      }
    );

    // Clean up GSAP instances on component unmount
    return () => {
      mm.revert();
    };
  }, []);

  return <DBRSVG ref={svgRef} />;
};

export default AnimatedDBRSVG;

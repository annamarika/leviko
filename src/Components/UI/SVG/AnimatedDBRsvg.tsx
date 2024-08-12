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
              trigger: ".DBRDiagrammWrapper", // Target the MethodenIntroContainer by ID
              start: "-300 top", // Adjust as needed
              end: "100 top",
              scrub: 0.5,
              markers: true, // Remove this in production, it's for debugging
            },
          }
        );
      });
    }

    // Animate DiagrammBox components
    const boxes = gsap.utils.toArray<HTMLElement>(".DiagrammBox");

    boxes.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0 },
        {
          opacity: 1,
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
  }, []);

  return <DBRSVG ref={svgRef} />;
};

export default AnimatedDBRSVG;

// Continue with the rest of your component and styled-components code as previously defined

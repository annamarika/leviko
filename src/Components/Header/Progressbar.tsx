import { useEffect, useState } from "react";
import styled from "styled-components";

const Progressbar = () => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      const roundedScrollPercent = Math.round(scrollPercent / 10) * 10;

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setProgressWidth(roundedScrollPercent);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <ProgressContainer>
      <ProgressbarItem progress={progressWidth} />
    </ProgressContainer>
  );
};

export default Progressbar;

interface ProgressBarProps {
  progress: number;
}

export const ProgressContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #182ec0;
  z-index: 200;
`;

const shouldForwardProp = (prop: string) => !["progress"].includes(prop);

export const ProgressbarItem = styled.div.withConfig({
  shouldForwardProp,
})<ProgressBarProps>`
  height: 8px;
  background-color: #aafe83;
  width: ${(props) => props.progress}%;
  z-index: 300;
  transition: ${(props) =>
    props.progress ? "width 0.5s ease-in-out" : "none"};
  will-change: width;
`;

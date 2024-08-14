import React, { useEffect } from "react";
import "./BallEffect.css";

const BallEffect: React.FC = () => {
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1024) {
        // Remove the cursor effect if the screen is smaller than 1024px
        const cursor = document.querySelector(".ball") as HTMLElement;
        if (cursor) {
          cursor.style.display = "none";
        }
        return;
      }

      const cursor = document.querySelector(".ball") as HTMLElement;

      if (cursor) {
        cursor.style.display = "block";
      }

      let ballX = 0;
      let ballY = 0;

      let cursorX = 0;
      let cursorY = 0;

      const speed = 0.2;

      function animate() {
        const distX = cursorX - ballX;
        const distY = cursorY - ballY;

        ballX += distX * speed;
        ballY += distY * speed;

        cursor.style.left = ballX + "px";
        cursor.style.top = ballY + "px";

        requestAnimationFrame(animate);
      }

      animate();

      const mouseMoveHandler = (event: MouseEvent) => {
        cursorX = event.clientX + window.scrollX;
        cursorY = event.clientY + window.scrollY;
      };

      document.addEventListener("mousemove", mouseMoveHandler);

      return () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
      };
    };

    // Call handleResize initially
    handleResize();

    // Add a resize event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="ball"></div>;
};

export default BallEffect;

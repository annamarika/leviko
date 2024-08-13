// src/Components/BallEffect.tsx

import React, { useEffect } from 'react';
import './BallEffect.css';

const BallEffect: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.ball') as HTMLElement;

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

      cursor.style.left = ballX + 'px';
      cursor.style.top = ballY + 'px';

      requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener('mousemove', function (event) {
        cursorX = event.clientX + window.scrollX;
        cursorY = event.clientY + window.scrollY;
    });

    return () => {
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  return <div className="ball"></div>;
};

export default BallEffect;
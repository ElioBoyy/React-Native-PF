import { useEffect } from "react";
import "./Snowfall.css";

const Snowfall = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";

      const initialOpacity = Math.random(); // Opacity between 0 and 1
      snowflake.style.opacity = initialOpacity.toString();

      const size = Math.random() * 10 + 5; // Size between 5 and 15 pixels
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;

      const animationDuration = Math.random() * 3 + 2; // Duration between 2 and 5 seconds
      snowflake.style.animationDuration = `${animationDuration}s`;

      snowflake.style.left = `${
        (0.05 + Math.random() * 0.9) * window.innerWidth
      }px`;
      document.body.appendChild(snowflake);

      // Remove snowflake after animation
      snowflake.addEventListener("animationend", () => {
        snowflake.remove();
      });
    };

    const createSnowfall = () => {
      const numSnowflakes = Math.floor(Math.random() * 31) + 20; // Between 20 and 50 snowflakes
      for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
      }
    };

    createSnowfall();
  }, []); // Run once on component mount

  return null; // No rendering of the component
};

export default Snowfall;

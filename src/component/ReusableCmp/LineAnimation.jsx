import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../All_css/LineAnimation.css";

const LineAnimation = () => {
  const lineBoxRef = useRef(null); // Reference for the SVG container
  const svgHeight = 40; // Height of the SVG container
  const centerY = svgHeight ; // Center Y coordinate
  const originalPath = `M 10 ${centerY} Q 625 ${centerY} 1240 ${centerY}`; // Original path data (adjusted for smaller height)

  useEffect(() => {
    const lineBox = lineBoxRef.current;

    const handleMouseMove = (event) => {
      const rect = lineBox.getBoundingClientRect();
      const mouseX = event.clientX - rect.left; // Mouse X position relative to the SVG
      const mouseY = event.clientY - rect.top; // Mouse Y position relative to the SVG

      const newPath = `M 10 ${centerY} Q ${mouseX} ${mouseY} 1240 ${centerY}`;
      

      gsap.to("svg path", {
        attr: { d: newPath },
        duration: 0.1,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to("svg path", {
        attr: { d: originalPath },
        duration: 0.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    // Add event listeners
    lineBox.addEventListener("mousemove", handleMouseMove);
    lineBox.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      lineBox.removeEventListener("mousemove", handleMouseMove);
      lineBox.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [originalPath, centerY]);

  return (
    <div className="line_animation_container">
      <svg
        ref={lineBoxRef}
        className="line_box"
        width="99%"
        height="80"
      >
        <path d={originalPath} stroke="white" fill="transparent" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default LineAnimation;
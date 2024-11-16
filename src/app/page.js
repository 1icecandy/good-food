"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
//import { gsap } from "gsap";
import Nav from "./components/Nav";

export default function Home() {
  const [viewportSize, setViewportSize] = useState(""); // Initial state is an empty string

  const calculateViewportSize = () => {
    const width = window.innerWidth; // Get current viewport width
    if (width <= 768) {
      setViewportSize("smScreen"); // For small screen sizes
    } else {
      setViewportSize("lgScreen"); // For larger screens
    }
  };

  useEffect(() => {
    // Calculate viewport size on initial render
    calculateViewportSize();

    // Update the viewport size on resize
    window.addEventListener("resize", calculateViewportSize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", calculateViewportSize);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className={styles.page}>
      {viewportSize === "smScreen" && <Nav />} {/* Corrected to use 'viewportSize' */}
    </div>
  );
}
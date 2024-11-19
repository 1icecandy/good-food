"use client";
import { useState, useEffect } from "react";

import Lenis from "lenis";

import styles from "./page.module.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Who from "./components/Who";
import What from "./components/What";

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

  //effect to distinguish between viewport sizes
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

  //effect to implement smooth scrolling 
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
   },[])

  return (
    <div className={styles.page}>
      {viewportSize === "smScreen" && <Nav />} {/* Corrected to use 'viewportSize' */}
    <Hero />
    <Why />
    <Who />
    <What/>
    </div>
  );
}
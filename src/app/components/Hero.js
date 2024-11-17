"use client";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
    //images for hero section
    const images = [
        "https://ik.imagekit.io/0xcqzy/good-food/It%20was%20time%20to%20put%20together....jpg?updatedAt=1731841656812",
        "https://ik.imagekit.io/0xcqzy/good-food/This%20was%20the%20one%20project%20th....jpg?updatedAt=1731841658997",
        "https://ik.imagekit.io/0xcqzy/good-food/sliced%20meat%20on%20white%20cerami....jpg?updatedAt=1731851918912",

    ]

    // State to store the selected hero image
    const [heroImg, setHeroImg] = useState(null);

    // useEffect hook to set the random image on initial render
    useEffect(() => {
        const randomNum = getRandomNumber(0, images.length - 1);  // Get a random number between 0 and length of images array
        setHeroImg(images[randomNum]);  // Set the selected image in state
    }, []);  // Empty dependency array to run only on component mount

    // Function to generate a random number between min and max (inclusive)
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;  // Return the random number
    };


    return (
        <div className={styles.hero}>
            {/* Only render the image if heroImg is not null */}
            {heroImg && (
                <Image
                    src={heroImg}  // Dynamically set the image source
                    alt="food image"  // Alt text for accessibility
                    layout="fill"  // Makes the image fill the parent container
                    objectFit="cover"  // Ensures the image covers the entire container without distortion
                />
            )}
        </div>
    )
}
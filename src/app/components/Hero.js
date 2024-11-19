"use client";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
    //images for hero section
    const images = [
        "https://ik.imagekit.io/0xcqzy/good-food/Ora%20King%20Salmon%20-%20dinner%20pl....jpg?updatedAt=1731841913791",
        "https://ik.imagekit.io/0xcqzy/good-food/%EB%B3%B5%EC%88%AD%EC%95%84%20%EB%94%94%EC%A0%80%ED%8A%B8.jpg?updatedAt=1731860829500",
        "https://ik.imagekit.io/0xcqzy/good-food/a%20bowl%20of%20food%20with%20a%20garni....jpg?updatedAt=1731861052594",
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
                    fill  // Makes the image fill the parent container
                    className={styles.heroImg}
                />
            )}

            {/* Overlay text */}
            <div className={styles.overlay}>
                <div className={styles.heroText}>good</div>
                <p>Alberto Romano presents GoodFood, a personalized nutrition advisor and private chef service </p>
                <div className={styles.heroText}>food</div>
            </div>

        </div>
    )
}
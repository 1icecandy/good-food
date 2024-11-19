import localFont from "next/font/local";
import "./globals.css";

const oranienbaum = localFont({
src: "./fonts/Oranienbaum-Regular.woff",
variable:"--regular",
});

const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-Italic.woff",
  variable:"--italic",
})

export const metadata = {
  title: "Good Food - Nutritional Advisor and Private Chef",
  description: "A personalized culinary experience with expert nutritional advice and private chef services, offering delicious and healthy meals tailored just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${oranienbaum.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}

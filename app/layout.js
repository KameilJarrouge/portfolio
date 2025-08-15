// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Kamil Jarrouj",
  description: "Kamil Jarrouj portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100	`}
      >
        {children}
      </body>
    </html>
  );
}

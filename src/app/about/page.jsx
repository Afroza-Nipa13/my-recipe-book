// src/app/about/page.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Placeholder images for the photo grid
// In a real app, you would fetch these from a data source or use local assets.
const images = [
  "https://i.postimg.cc/MGW20fvR/about1.jpg",
  "https://i.postimg.cc/SKsXTsP2/about2.webp",
  "https://i.postimg.cc/mrtD3nc7/about3.jpg",
  "https://i.postimg.cc/RV4Zph6S/about4.jpg",
  "https://i.postimg.cc/VNrf0bTR/about5.jpg",
  "https://i.postimg.cc/hthgNdSB/about6.jpg",
  "https://i.postimg.cc/dtpStk2v/about7.jpg",
  "https://i.postimg.cc/Kcs0JksL/about8.jpg",
  "https://i.postimg.cc/Nf3pwhtj/about9.jpg"
];

export default function aboutPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* "Go Back" Button */}
      <div className="container mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 rounded-full transition-colors duration-200 hover:bg-gray-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Go Back
        </button>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
          Welcome to our Foodie community! We are passionate about bringing people together through a shared love of food. Our mission is to provide you with an abundance of delicious recipes, insightful blog posts, and a space to share your culinary journey.
        </p>
      </div>

      {/* Photo Grid Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image 
                src={src} 
                alt={`Grid image ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
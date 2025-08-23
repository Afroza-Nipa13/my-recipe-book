// src/app/about/page.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Placeholder images for the photo grid
// In a real app, you would fetch these from a data source or use local assets.
const images = [
  "https://images.unsplash.com/photo-1546069901-d0b55694a919?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d351?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1550547644-245c609c1181?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1481931098730-3304824b20a1?q=80&w=2895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512621776951-a8779623e21c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490645935378-ab2220ba4772?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505253716300-3571d2b8a74e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482049016681-cb64e815e985?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
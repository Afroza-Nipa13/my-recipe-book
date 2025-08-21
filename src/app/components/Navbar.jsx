"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg px-8">
      {/* Left side - Logo */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          🍴 Foodie
        </Link>
      </div>

      {/* Right side - Menu */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            
          </li>
        </ul>
        <Link href="/login">
              <button className="bg-neutral text-base-100 px-4 py-2 cursor-pointer rounded-2xl">Login</button>
            </Link>
      </div>
    </div>
  );
}

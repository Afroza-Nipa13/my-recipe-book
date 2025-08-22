"use client";
import Link from "next/link";
import LoginButton from "./LoginButton";
import UserInfo from "./userInfo";


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
      <div className="flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <Link href="/register">
              <li>Register</li>
            </Link>
        </ul>
              
             <LoginButton></LoginButton>
             <UserInfo></UserInfo>
            
      </div>
    </div>
  );
}

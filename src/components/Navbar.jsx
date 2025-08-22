"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";




export default function Navbar() {
  const { data: session, status } = useSession();
  console.log(session)
    const navManu=()=>{
        return <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>{" "}
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>{" "}
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        </>
    }
  return (
   
    <div className="navbar bg-base-100 shadow-sm px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{navManu()}
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost normal-case text-xl">
          🍴 Foodie
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navManu()}
    </ul>
  </div>
  <div className="navbar-end">
   <ul className="flex gap-2">
     {status == "authenticated" ? (
              <>
                <li>
                  <Image
                    src={session?.user?.image}
                    width={50}
                    height={50}
                    alt="user-logo"
                  />
                </li>
                <li onClick={() => signOut()}>Log Out</li>
              </>
            ) : (
     <>
                <li>
                  <Link href={"/register"} className="btn">Register</Link>
                </li>
                <li>
                  <Link href={"/login"} className="btn">Login</Link>
                </li>
              </>
            )}</ul>
  </div>
</div>
  );
}

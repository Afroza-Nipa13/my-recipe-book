"use client";
import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import { signIn } from "next-auth/react"; // 👈 এটা যোগ করো

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const result = await registerUser({ name, email, password });
    setLoading(false);

    if (!result) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "User already exists or something went wrong.",
      });
      return;
    }

    //Registration successful, now login automatically
    await signIn("credentials", {
      redirect: true,          
      email,
      password,
      callbackUrl: "/",       
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
          required
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Email</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
          required
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
          required
        />
      </label>
      <button
        type="submit"
        className={`w-full h-12 bg-orange-500 text-white font-bold ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Registering..." : "Sign Up"}
      </button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
}
